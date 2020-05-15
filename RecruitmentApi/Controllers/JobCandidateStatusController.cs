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
    public class JobCandidateStatusController : ControllerBase
    {
        private readonly DataContext _context;

        public JobCandidateStatusController(DataContext context)
        {
            _context = context;
        }

        // GET: api/JobCandidateStatus
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobCandidateStatus>>> GetJobCandidateStatus()
        {
            return await _context.JobCandidateStatus.ToListAsync();
        }

        // GET: api/JobCandidateStatus/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JobCandidateStatus>> GetJobCandidateStatus(int id)
        {
            var jobCandidateStatus = await _context.JobCandidateStatus.FindAsync(id);

            if (jobCandidateStatus == null)
            {
                return NotFound();
            }

            return jobCandidateStatus;
        }

        // PUT: api/JobCandidateStatus/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJobCandidateStatus(int id, JobCandidateStatus jobCandidateStatus)
        {
            if (id != jobCandidateStatus.id)
            {
                return BadRequest();
            }

            _context.Entry(jobCandidateStatus).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobCandidateStatusExists(id))
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

        // POST: api/JobCandidateStatus
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<JobCandidateStatus>> PostJobCandidateStatus(JobCandidateStatus jobCandidateStatus)
        {
            _context.JobCandidateStatus.Add(jobCandidateStatus);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJobCandidateStatus", new { id = jobCandidateStatus.id }, jobCandidateStatus);
        }

        // DELETE: api/JobCandidateStatus/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<JobCandidateStatus>> DeleteJobCandidateStatus(int id)
        {
            var jobCandidateStatus = await _context.JobCandidateStatus.FindAsync(id);
            if (jobCandidateStatus == null)
            {
                return NotFound();
            }

            _context.JobCandidateStatus.Remove(jobCandidateStatus);
            await _context.SaveChangesAsync();

            return jobCandidateStatus;
        }

        private bool JobCandidateStatusExists(int id)
        {
            return _context.JobCandidateStatus.Any(e => e.id == id);
        }
    }
}
