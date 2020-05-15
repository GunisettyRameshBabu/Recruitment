using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecruitmentApi.Data;
using RecruitmentApi.Models;

namespace RecruitmentApi.Controllers
{
    [EnableCors("_myAllowSpecificOrigins")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        private byte[] _key;
        private byte[] _iv;
        private TripleDESCryptoServiceProvider _provider;
        private readonly IMapper _mapper;
      
        public UsersController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
            _key = System.Text.ASCIIEncoding.ASCII.GetBytes("GSYAHAGCBDUUADIADKOPAAAW");
            _iv = System.Text.ASCIIEncoding.ASCII.GetBytes("USAZBGAW");
            _provider = new TripleDESCryptoServiceProvider();
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult> GetUsers()
        {
            var response = new ServiceResponse<IEnumerable<UserView>>();
            try
            {
                
                response.Data = await (from x in _context.Users
                                      join y in _context.Roles on x.roleId equals y.id
                                      join c in _context.Countries on x.country equals c.Id into countries
                                      from c in countries.DefaultIfEmpty()
                                      select new UserView()
                                      {
                                          id = x.id,
                                          email = x.email,
                                          firstName = x.firstName,
                                          lastName = x.lastName,
                                          middleName = x.middleName,
                                          role = y.Name,
                                          userid = x.userid,
                                          roleId = x.roleId,
                                          countryName = c.Name,
                                          countryId = c.Id,
                                          active = x.active
                                      }).ToListAsync();
                response.Success = true;
                response.Message = "Success";
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }

           return Ok(response);
            
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Users>> GetUsers(int id)
        {
            var users = await _context.Users.FindAsync(id);

            if (users == null)
            {
                return NotFound();
            }

            return users;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsers(int id, UserDto users)
        {
            if (id != users.id)
            {
                return BadRequest();
            }
            var user = await _context.Users.FindAsync(id);
            users.password = user.password;
            var usr = _mapper.Map<Users>(users);
            _context.Entry(user).CurrentValues.SetValues(usr);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsersExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Users>> PostUsers(UserDto users)
        {

            users.password = EncodePasswordToBase64(users.password);

            _context.Users.Add(new Users 
            {
                id = users.id,
                email = users.email,
                firstName = users.firstName,
                lastName = users.lastName,
                middleName = users.middleName,
                password = users.password,
                roleId = users.roleId,
                userid = users.userid
        
            });
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsers", new { id = users.id }, users);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Users>> DeleteUsers(int id)
        {
            var users = await _context.Users.FindAsync(id);
            if (users == null)
            {
                return NotFound();
            }

            _context.Users.Remove(users);
            await _context.SaveChangesAsync();

            return users;
        }

        // GET: api/Users/UserExists
        [HttpGet("UserExists")]
        public ActionResult<bool> CheckUsersExists(string userid)
        {
            return _context.Users.Any(e => e.userid == userid);
        }

        // GET: api/Users/Login
        [HttpPost("Login")]
        public async Task<IActionResult> Login(UserLoginDto userdto)
        {

            var response = await validateUser(userdto);
            return Ok(response);
        }

        private async Task<ServiceResponse<Users>> validateUser(UserLoginDto userdto)
        {
            var response = new ServiceResponse<Users>();
            try
            {
                Users user = await _context.Users.FirstOrDefaultAsync(x => x.userid.ToLower().Equals(userdto.UserId.ToLower()));
                if (user == null)
                {
                    response.Success = false;
                    response.Message = "User not found.";
                }
                else if (DecodeFrom64(user.password) != userdto.Password)
                {
                    response.Success = false;
                    response.Message = "Wrong password.";
                }
                else if((string.IsNullOrEmpty(user.loginTypes) || !user.loginTypes.Split(',').Contains(userdto.LoginType.ToString())) && user.loginTypes != "Admin")
                {
                    response.Success = false;
                    response.Message = "You are not authorized to view this content";
                }
                else
                {
                    response.Data = user;
                    response.Success = true;
                }
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }


            return response;
        }

        private bool UsersExists(int id)
        {
            return _context.Users.Any(e => e.id == id);
        }

        //this function Convert to Encord your Password 
        private string EncodePasswordToBase64(string password)
        {
            try
            {
                byte[] encData_byte = new byte[password.Length];
                encData_byte = System.Text.Encoding.UTF8.GetBytes(password);
                string encodedData = Convert.ToBase64String(encData_byte);
                return encodedData;
            }
            catch (Exception ex)
            {
                throw new Exception("Error in base64Encode" + ex.Message);
            }
        } //this function Convert to Decord your Password
        private string DecodeFrom64(string encodedData)
        {
            System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
            System.Text.Decoder utf8Decode = encoder.GetDecoder();
            byte[] todecode_byte = Convert.FromBase64String(encodedData);
            int charCount = utf8Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
            char[] decoded_char = new char[charCount];
            utf8Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
            string result = new String(decoded_char);
            return result;
        }
    }
}
