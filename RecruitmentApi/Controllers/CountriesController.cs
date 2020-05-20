using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
    public class CountriesController : ControllerBase
    {
        private readonly DataContext _context;

        public CountriesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Countries
        [HttpGet]
        public async Task<ServiceResponse<IEnumerable<Country>>> GetCountries()
        {
            var response = new ServiceResponse<IEnumerable<Country>>();
            try
            {
                response.Data = await _context.Countries.ToListAsync();
                response.Success = true;
                response.Message = "Data Retrived";
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }
            return response;
        }

        // GET: api/Countries/5
        [HttpGet("{id}")]
        public async Task<ServiceResponse<Country>> GetCountry(int id)
        {
            var response = new ServiceResponse<Country>();
            try
            {
                response.Data = await _context.Countries.FindAsync(id);
                if (response.Data == null)
                {
                    response.Success = false;
                    response.Message = "Data not found";
                    return response;
                }
                response.Success = true;
                response.Message = "Data Retrived";
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }
            return response;
        }

        [Route("GetJobCode/{id}")]
        [HttpGet]
        public async Task<ServiceResponse<string>> GetJobCode(int id)
        {
            var response = new ServiceResponse<string>();
            try
            {
                var item = await _context.Countries.FirstOrDefaultAsync(x => x.Id == id);
                var newId = _context.Openings.Max(x => x.id);
                response.Data = item.Code + (newId + 1);
                response.Success = true;
                response.Message = "Success";
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }
            return response;
        }
        // PUT: api/Countries/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<ServiceResponse<int>> PutCountry(int id, Country country)
        {
            var response = new ServiceResponse<int>();
            try
            {
                if (id != country.Id)
                {
                    response.Success = false;
                    response.Message = "Invalid country";
                    return response;
                }

                var item = _context.Countries.Find(id);
                if (item == null)
                {
                    response.Success = false;
                    response.Message = "Countries not found";
                    return response;
                }
                _context.Entry(item).CurrentValues.SetValues(country);
                await _context.SaveChangesAsync();
                response.Success = true;
                response.Message = "Countries updated successfully";
                response.Data = country.Id;
            }
            catch (DbUpdateConcurrencyException ex)
            {
                if (!CountryExists(id))
                {
                    response.Success = false;
                    response.Message = "Country not found";
                }
                else
                {
                    response.Success = false;
                    response.Message = ex.Message;
                }
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }

            return response;
        }

        // POST: api/Countries
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ServiceResponse<int>> PostCountry(Country country)
        {
            _context.Countries.Add(country);
            var response = new ServiceResponse<int>();
            try
            {
                _context.Countries.Add(country);
                await _context.SaveChangesAsync();
                response.Data = country.Id;
                response.Success = true;
                response.Message = "Country added successfullu";
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }


            return response;
        }

        // DELETE: api/Countries/5
        [HttpDelete("{id}")]
        public async Task<ServiceResponse<bool>> DeleteCountry(int id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var masterData = await _context.Countries.FindAsync(id);
                if (masterData == null)
                {
                    response.Success = false;
                    response.Message = "Invalid Country";
                    return response;
                }

                _context.Countries.Remove(masterData);
                await _context.SaveChangesAsync();
                response.Success = true;
                response.Message = "Country deleted successfully";
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }


            return response;
        }

        private bool CountryExists(int id)
        {
            return _context.Countries.Any(e => e.Id == id);
        }
    }
}
