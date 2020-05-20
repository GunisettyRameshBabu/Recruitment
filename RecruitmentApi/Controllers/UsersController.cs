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
                                       join y in _context.MasterData on x.roleId equals y.id
                                       join c in _context.Countries on x.country equals c.Id into countries
                                       from c in countries.DefaultIfEmpty()
                                       select new UserView()
                                       {
                                           id = x.id,
                                           email = x.email,
                                           firstName = x.firstName,
                                           lastName = x.lastName,
                                           middleName = x.middleName,
                                           role = y.name,
                                           userid = x.userid,
                                           roleId = x.roleId,
                                           countryName = c.Name,
                                           countryId = c.Id,
                                           active = x.active,
                                           modifiedDate = x.modifiedDate,
                                           createdDate = x.createdDate,
                                           createdBy = x.createdBy,
                                           modifiedBy = x.modifiedBy
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

        // GET: api/Users/5
        [HttpGet("GetUsersByCountry")]
        public async Task<ServiceResponse<List<UserList>>> GetUsersByCountry()
        {
            var response = new ServiceResponse<List<UserList>>();
            try
            {
                response.Data = await (from x in _context.Users
                                       select new UserList
                                       {
                                           id = x.id,
                                           name = x.firstName + " " + (x.middleName ?? "") + " " + x.lastName,
                                           country = x.country
                                       }).ToListAsync();
                response.Message = "Users List";
                response.Success = true;

            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }


            return response;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<ServiceResponse<bool>> PutUsers(int id, UserDto users)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                if (id != users.id)
                {
                    response.Success = false;
                    response.Message = "Invalid user id";
                    return response;
                }
                var user = await _context.Users.FindAsync(id);
                users.password = user.password;
                users.modifiedDate = DateTime.Now;
                var usr = _mapper.Map<Users>(users);
                _context.Entry(user).CurrentValues.SetValues(usr);
                await _context.SaveChangesAsync();
                response.Success = true;
                response.Message = "User updated successfully";
            }
            catch (Exception ex)
            {
                if (!UsersExists(id))
                {
                    response.Success = false;
                    response.Message = "User not found";
                    return response;
                }
                else
                {
                    response.Success = false;
                    response.Message = ex.Message;
                    return response;
                }
            }
            return response;
        }

        // POST: api/Users
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Users>> PostUsers(UserDto users)
        {

            users.password = EncodePasswordToBase64(users.password);
            var user = _mapper.Map<Users>(users);
            user.createdDate = DateTime.Now;
            _context.Users.Add(user);
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

        // GET: api/Users/Logout
        [HttpGet("Logout/{id}")]
        public async Task<ServiceResponse<bool>> Logout(string id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var session = _context.UserSession.Find(id);
                if (session == null)
                {
                    response.Message = "Invalid session";
                    response.Success = false;
                    return response;
                }

                session.outTime = DateTime.Now;
                _context.Entry(session).CurrentValues.SetValues(session);
                await _context.SaveChangesAsync();
                response.Message = "Logout Successfully";
                response.Success = true;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            return response;
        }

        private async Task<ServiceResponse<UserDto>> validateUser(UserLoginDto userdto)
        {
            var response = new ServiceResponse<UserDto>();
            try
            {
                response.Data = await (from x in _context.Users
                                       join y in _context.MasterData on x.roleId equals y.id
                                       where x.userid.ToLower() == userdto.UserId.ToLower()
                                       select new UserDto()
                                       {
                                           id = x.id,
                                           roleId = x.roleId,
                                           active = x.active,
                                           countryId = x.country,
                                           email = x.email,
                                           firstName = x.firstName,
                                           lastName = x.lastName,
                                           loginTypes = x.loginTypes,
                                           middleName = x.middleName,
                                           roleName = y.name,
                                           userid = x.userid,
                                           password = x.password
                                       }).FirstOrDefaultAsync();
                if (response.Data == null)
                {
                    response.Success = false;
                    response.Message = "User not found.";
                }
                else if (DecodeFrom64(response.Data.password) != userdto.Password)
                {
                    response.Success = false;
                    response.Message = "Wrong password.";
                }
                //else if((string.IsNullOrEmpty(user.loginTypes) || !user.loginTypes.Split(',').Contains(userdto.LoginType.ToString())) && user.loginTypes != "Admin")
                //{
                //    response.Success = false;
                //    response.Message = "You are not authorized to view this content";
                //}
                else
                {
                    response.Success = true;
                    var userSession = new UserSession();
                    userSession.sessionId = Guid.NewGuid().ToString();
                    userSession.userid = response.Data.id;
                    userSession.inTime = DateTime.Now;
                    _context.UserSession.Add(userSession);
                    _context.SaveChanges();
                    response.Data.sessionId = userSession.sessionId;
                    response.Message = "Login Success";
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
