using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecruitmentApi.Data;
using RecruitmentApi.Models;

namespace RecruitmentApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobOpeningsController : ControllerBase
    {
        private readonly DataContext _context;

        public JobOpeningsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/JobOpenings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobOpeningsResponse>>> GetJobOpenings()
        {
            return await (from x in   _context.JobOpenings
                         join y in _context.JobAttachments on x.jobid equals y.jobid into applies
                         from y in applies.DefaultIfEmpty()
                         select new JobOpeningsResponse()
                         {
                             id = x.id ,
                             jobid = x.jobid,
                             company = x.company,
                             company_logo = x.company,
                             company_url = x.company_url,
                             created_at = x.created_at,
                             description = x.description,
                             how_to_apply = x.how_to_apply,
                             location = x.location,
                             short_description = x.short_description,
                             title = x.title,
                             type = x.type,
                             url = x.url,
                             applied = y != null
                         }).ToListAsync();
        }

        // GET: api/JobOpenings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JobOpeningsResponse>> GetJobOpenings(string id)
        {
            var jobOpenings =  await (from x in _context.JobOpenings
                                             join y in _context.JobAttachments on x.jobid equals y.jobid into applies
                                             from y in applies.DefaultIfEmpty()
                                             where x.id == id
                                             select new JobOpeningsResponse()
                                             {
                                                 id = x.id,
                                                 jobid = x.jobid,
                                                 company = x.company,
                                                 company_logo = x.company,
                                                 company_url = x.company_url,
                                                 created_at = x.created_at,
                                                 description = x.description,
                                                 how_to_apply = x.how_to_apply,
                                                 location = x.location,
                                                 short_description = x.short_description,
                                                 title = x.title,
                                                 type = x.type,
                                                 url = x.url,
                                                 applied = y != null
                                             }).FirstOrDefaultAsync();

            if (jobOpenings == null)
            {
                return NotFound();
            }

            return jobOpenings;
        }

        // PUT: api/JobOpenings/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJobOpenings(string id, JobOpenings jobOpenings)
        {
            if (id != jobOpenings.id)
            {
                return BadRequest();
            }

            _context.Entry(jobOpenings).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobOpeningsExists(id))
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

        // POST: api/JobOpenings
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<JobOpenings>> PostJobOpenings(JobOpenings jobOpenings)
        {
            _context.JobOpenings.Add(jobOpenings);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (JobOpeningsExists(jobOpenings.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetJobOpenings", new { id = jobOpenings.id }, jobOpenings);
        }

        // DELETE: api/JobOpenings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<JobOpenings>> DeleteJobOpenings(string id)
        {
            var jobOpenings = await _context.JobOpenings.FindAsync(id);
            if (jobOpenings == null)
            {
                return NotFound();
            }

            _context.JobOpenings.Remove(jobOpenings);
            await _context.SaveChangesAsync();

            return jobOpenings;
        }

        private bool JobOpeningsExists(string id)
        {
            return _context.JobOpenings.Any(e => e.id == id);
        }
    }
}
