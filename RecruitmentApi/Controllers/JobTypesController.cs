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
    public class JobTypesController : ControllerBase
    {
        private readonly DataContext _context;

        public JobTypesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/JobTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobTypes>>> GetJobTypes()
        {
            return await _context.JobTypes.ToListAsync();
        }

        // GET: api/JobTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JobTypes>> GetJobTypes(int id)
        {
            var jobTypes = await _context.JobTypes.FindAsync(id);

            if (jobTypes == null)
            {
                return NotFound();
            }

            return jobTypes;
        }

        // PUT: api/JobTypes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJobTypes(int id, JobTypes jobTypes)
        {
            if (id != jobTypes.Id)
            {
                return BadRequest();
            }

            _context.Entry(jobTypes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobTypesExists(id))
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

        // POST: api/JobTypes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<JobTypes>> PostJobTypes(JobTypes jobTypes)
        {
            _context.JobTypes.Add(jobTypes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJobTypes", new { id = jobTypes.Id }, jobTypes);
        }

        // DELETE: api/JobTypes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<JobTypes>> DeleteJobTypes(int id)
        {
            var jobTypes = await _context.JobTypes.FindAsync(id);
            if (jobTypes == null)
            {
                return NotFound();
            }

            _context.JobTypes.Remove(jobTypes);
            await _context.SaveChangesAsync();

            return jobTypes;
        }

        private bool JobTypesExists(int id)
        {
            return _context.JobTypes.Any(e => e.Id == id);
        }
    }
}
