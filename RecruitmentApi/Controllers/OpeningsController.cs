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
    public class OpeningsController : ControllerBase
    {
        private readonly DataContext _context;

        public OpeningsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Openings/
        [HttpGet("GetOpeningsByCountry/{id}")]
        public async Task<ActionResult<ServiceResponse<IEnumerable<OpeningsListView>>>> GetOpeningsByCountry(string id)
        {
            var response = new ServiceResponse<IEnumerable<OpeningsListView>>();
            try
            {
                var countries = _context.Countries.ToList();
              var  filteredCountries = ((id == "in" ? countries.Where(x => x.Code == "IN").Select(x => x.Id) : ( id == "all" ? countries.Select(x => x.Id) :
                    countries.Where(x => x.Code != "IN").Select(x => x.Id))).ToList());
                response.Data = await (from o in _context.Openings
                                       join a in _context.Users on o.assaignedTo equals a.userid into assaigns
                                       from a in assaigns.DefaultIfEmpty()
                                       join c in _context.Citys on o.city equals c.Id
                                       join cl in _context.ClientCodes on o.client equals cl.Id
                                       join co in _context.Users on o.contactName equals co.userid into contacts
                                       from co in contacts.DefaultIfEmpty()
                                       join am in _context.Users on o.accountManager equals am.userid into accounts
                                       from am in accounts.DefaultIfEmpty()
                                       join s in _context.JobStatus on o.status equals s.Id
                                       where filteredCountries.Contains(o.country)
                                       select new OpeningsListView()
                                       {
                                           accountManager = (am == null ? "" : am.firstName + " " + (am.middleName ?? "") + am.lastName),
                                           assaignedTo = (a == null ? "" : a.firstName + " " + (a.middleName ?? "") + a.lastName),
                                           city = c.Name,
                                           client = cl.Name,
                                           contactName = (co == null ? "" : co.firstName + " " + (co.middleName ?? "") + co.lastName),
                                           jobid = o.jobid,
                                           jobtitle = o.jobtitle,
                                           status = s.Name,
                                           targetdate = o.targetdate
                                       }).ToListAsync();
                response.Success = true;
                response.Message = "Success";
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }

            return Ok(response);
           
        }

        // GET: api/Openings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Openings>> GetOpenings(string id)
        {
            var openings = await _context.Openings.FirstOrDefaultAsync(x => x.jobid == id);

            if (openings == null)
            {
                return NotFound();
            }

            return openings;
        }

        // PUT: api/Openings/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOpenings(int id, Openings openings)
        {
            if (id != openings.id)
            {
                return BadRequest();
            }

            _context.Entry(openings).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OpeningsExists(id))
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

        // POST: api/Openings
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ServiceResponse<Openings>>> PostOpenings(JobOpeningView openings)
        {
            var response = new ServiceResponse<Openings>();

            try
            {
                if (openings == null)
                {
                    response.Success = false;
                    response.Message = "Invalid Response , Please check";
                    return Ok(response);
                }

                var opening = new Openings();
                opening.client = openings.Client;
                opening.city = openings.City;
                opening.country = openings.Country;
                opening.createdate = DateTime.Now;
                opening.description = openings.Description;
                opening.experience = openings.Experience;
                opening.industry = openings.Industry;
                opening.isclientConfidencial = openings.ClientVisible;
                opening.jobid = openings.JobCode;
                opening.jobtitle = openings.JobTitle;
                opening.zip = openings.Zip;
                opening.targetdate = openings.TargetDate;
                opening.state = openings.State;
                opening.createdBy = "Gunisettyr@gmail.com";
                opening.status = 2;
                opening.jobtype = openings.JobType;

                _context.Openings.Add(opening);
                await _context.SaveChangesAsync();

                response.Success = true;
                response.Message = "Added";
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }

            return Ok(response);
           
        }

        // DELETE: api/Openings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Openings>> DeleteOpenings(int id)
        {
            var openings = await _context.Openings.FindAsync(id);
            if (openings == null)
            {
                return NotFound();
            }

            _context.Openings.Remove(openings);
            await _context.SaveChangesAsync();

            return openings;
        }

        private bool OpeningsExists(int id)
        {
            return _context.Openings.Any(e => e.id == id);
        }
    }
}
