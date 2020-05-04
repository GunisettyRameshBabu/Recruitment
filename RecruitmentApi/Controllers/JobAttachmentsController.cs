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
    public class JobAttachmentsController : ControllerBase
    {
        private readonly DataContext _context;

        public JobAttachmentsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/JobAttachments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobAttachments>>> GetJobAttachments()
        {
            return await _context.JobAttachments.ToListAsync();
        }

        // GET: api/JobAttachments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JobAttachments>> GetJobAttachments(int id)
        {
            var jobAttachments = await _context.JobAttachments.FindAsync(id);

            if (jobAttachments == null)
            {
                return NotFound();
            }

            return jobAttachments;
        }

        // PUT: api/JobAttachments/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJobAttachments(int id, JobAttachments jobAttachments)
        {
            if (id != jobAttachments.id)
            {
                return BadRequest();
            }

            _context.Entry(jobAttachments).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobAttachmentsExists(id))
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

        // POST: api/JobAttachments
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult> PostJobAttachments(JobAttachments jobAttachments)
        {
            try
            {
                _context.JobAttachments.Add(jobAttachments);
                await _context.SaveChangesAsync();

                return Ok(new ServiceResponse<string>() { Success = true, Message = "Job Applied Successfully" });
            }
            catch (Exception ex)
            {
                if (ex.InnerException != null && ex.InnerException.Message.IndexOf("UNIQUE") > 0)
                {
                    return Ok(new ServiceResponse<string>() { Success = false, Message = "You have already applied for this job" });
                } else
                {
                    return Ok(new ServiceResponse<string>() { Success = false, Message = ex.Message });
                }
            }
            
        }

        // DELETE: api/JobAttachments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<JobAttachments>> DeleteJobAttachments(int id)
        {
            var jobAttachments = await _context.JobAttachments.FindAsync(id);
            if (jobAttachments == null)
            {
                return NotFound();
            }

            _context.JobAttachments.Remove(jobAttachments);
            await _context.SaveChangesAsync();

            return jobAttachments;
        }

        private bool JobAttachmentsExists(int id)
        {
            return _context.JobAttachments.Any(e => e.id == id);
        }
    }
}
