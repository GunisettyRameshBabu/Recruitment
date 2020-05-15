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
    public class JobCandidatesController : ControllerBase
    {
        private readonly DataContext _context;

        public JobCandidatesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/JobCandidates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobCandidates>>> GetJobCandidates()
        {
            return await _context.JobCandidates.ToListAsync();
        }

        // GET: api/JobCandidates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JobCandidates>> GetJobCandidates(int id)
        {
            var jobCandidates = await _context.JobCandidates.FindAsync(id);

            if (jobCandidates == null)
            {
                return NotFound();
            }

            return jobCandidates;
        }

        // PUT: api/JobCandidates/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJobCandidates(int id, JobCandidates jobCandidates)
        {
            if (id != jobCandidates.id)
            {
                return BadRequest();
            }

            _context.Entry(jobCandidates).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobCandidatesExists(id))
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

        // POST: api/JobCandidates
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<JobCandidates>> PostJobCandidates(JobCandidates jobCandidates)
        {
            _context.JobCandidates.Add(jobCandidates);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJobCandidates", new { id = jobCandidates.id }, jobCandidates);
        }

        // DELETE: api/JobCandidates/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<JobCandidates>> DeleteJobCandidates(int id)
        {
            var jobCandidates = await _context.JobCandidates.FindAsync(id);
            if (jobCandidates == null)
            {
                return NotFound();
            }

            _context.JobCandidates.Remove(jobCandidates);
            await _context.SaveChangesAsync();

            return jobCandidates;
        }

        private bool JobCandidatesExists(int id)
        {
            return _context.JobCandidates.Any(e => e.id == id);
        }
    }
}
