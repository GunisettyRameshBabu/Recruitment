using System;
using System.Collections.Generic;
using System.IO;
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

        [HttpGet("Download/{id}")]
        public async Task<IActionResult> Download(int id)
        {
            var candidate = _context.JobCandidates.Find(id);
            if (candidate == null)
            {
                return NotFound("Resume Not Found");
            }
            
            
            return File(candidate.resume, "application/octet-stream"); // returns a FileStreamResult
        }

        // GET: api/JobCandidates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobCandidatesView>>> GetJobCandidates()
        {
            return await (from x in _context.JobCandidates
                          join s in _context.MasterData on x.status equals s.id
                          select new JobCandidatesView()
                          {
                              jobid = x.jobid,
                              firstName = x.firstName,
                              id = x.id,
                              lastName = x.lastName,
                              middleName = x.middleName,
                              phone = x.phone,
                              resume = x.resume,
                              status = s.id,
                              statusName = s.name,
                              email = x.email,
                              fileName = x.fileName,
                              createdBy = x.createdBy,
                              createdDate = x.createdDate,
                              modifiedBy = x.modifiedBy,
                              modifiedDate = x.modifiedDate
                          }).ToListAsync();
        }

        // GET: api/JobCandidates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JobCandidatesView>> GetJobCandidates(int id)
        {
            var jobCandidates = await (from x in _context.JobCandidates
                                       join s in _context.MasterData on x.status equals s.id
                                       where x.id == id
                                       select new JobCandidatesView()
                                       {
                                           jobid = x.jobid,
                                           firstName = x.firstName,
                                           id = x.id,
                                           lastName = x.lastName,
                                           middleName = x.middleName,
                                           phone = x.phone,
                                           resume = x.resume,
                                           status = s.id,
                                           statusName = s.name,
                                           email = x.email,
                                           fileName = x.fileName,
                                           createdBy = x.createdBy,
                                           createdDate = x.createdDate,
                                           modifiedBy = x.modifiedBy,
                                           modifiedDate = x.modifiedDate
                                       }).FirstOrDefaultAsync();

            if (jobCandidates == null)
            {
                return NotFound();
            }

            return jobCandidates;
        }

        // GET: api/JobCandidates/5
        [HttpGet("GetByJobId/{id}")]
        public async Task<ServiceResponse<List<JobCandidatesView>>> GetByJobId(string id)
        {
            var response = new ServiceResponse<List<JobCandidatesView>>();
            try
            {
                response.Data = await (from x in _context.JobCandidates
                                           join s in _context.MasterData on x.status equals s.id
                                           where x.jobid == id
                                           select new JobCandidatesView()
                                           {
                                               jobid = x.jobid,
                                               firstName = x.firstName,
                                               id = x.id,
                                               lastName = x.lastName,
                                               middleName = x.middleName,
                                               phone = x.phone,
                                               resume = x.resume,
                                               status = s.id,
                                               statusName = s.name,
                                               email = x.email,
                                               fileName = x.fileName,
                                               createdBy = x.createdBy,
                                               createdDate = x.createdDate,
                                               modifiedBy = x.modifiedBy,
                                               modifiedDate = x.modifiedDate
                                           }).ToListAsync();

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

        [HttpGet("GetCandidatesByJobId/{id}")]
        public async Task<ServiceResponse<List<JobCandidatesView>>> GetCandidatesByJobId(int id)
        {
            var response = new ServiceResponse<List<JobCandidatesView>>();
            try
            {
                response.Data = await (from x in _context.JobCandidates
                                       join s in _context.MasterData on x.status equals s.id
                                       where x.id == id
                                       select new JobCandidatesView()
                                       {
                                           jobid = x.jobid,
                                           firstName = x.firstName,
                                           id = x.id,
                                           lastName = x.lastName,
                                           middleName = x.middleName,
                                           phone = x.phone,
                                           resume = x.resume,
                                           status = s.id,
                                           statusName = s.name,
                                           email = x.email,
                                           fileName = x.fileName,
                                           createdBy = x.createdBy,
                                           createdDate = x.createdDate,
                                           modifiedBy = x.modifiedBy,
                                           modifiedDate = x.modifiedDate
                                       }).ToListAsync();

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

        // PUT: api/JobCandidates/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<ServiceResponse<int>> PutJobCandidates(int id, JobCandidates jobCandidates)
        {
            var response = new ServiceResponse<int>();

            try
            {
                if (id != jobCandidates.id)
                {
                    response.Success = false;
                    response.Message = "Invalid Candidate";
                    return response;
                }

                var job = _context.JobCandidates.Find(id);
                if (job == null)
                {
                    response.Success = false;
                    response.Message = "Candidate details not found";
                    return response;
                }

                job.status = jobCandidates.status;
                job.modifiedBy = jobCandidates.modifiedBy;
                job.modifiedDate = DateTime.Now;
                _context.Entry(job).CurrentValues.SetValues(job);
                await _context.SaveChangesAsync();
                response.Success = true;
                response.Message = "Update success";
                response.Data = job.id;
            }
            catch (DbUpdateConcurrencyException ex)
            {
                if (!JobCandidatesExists(id))
                {
                    response.Success = false;
                    response.Message = "Invalid Candidate";
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

        // PUT: api/JobCandidates/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("UploadAttachment/{id}"), DisableRequestSizeLimit]
        public async Task<ServiceResponse<JobCandidatesView>> UploadAttachment(int id)
        {
            var response = new ServiceResponse<JobCandidatesView>();
            if (!Request.Form.Files.Any() || id <= 0)
            {
                response.Success = false;
                response.Message = "Unable to find resume or invalid candidate id";
                return response;
            }

            try
            {
                var candidate = _context.JobCandidates.Find(id);
                if (candidate == null)
                {
                    response.Success = false;
                    response.Message = "Unable to find candidate";
                    return response;
                }
                using (var memoryStream = new MemoryStream())
                {
                    Request.Form.Files[0].CopyTo(memoryStream);
                    candidate.resume = memoryStream.ToArray();
                    candidate.fileName = Request.Form.Files[0].FileName;
                }
                response.Success = true;
                response.Message = "Add or Update Success";
                response.Data = await (from x in _context.JobCandidates
                                       join s in _context.MasterData on x.status equals s.id
                                       where x.id == id
                                       select new JobCandidatesView()
                                       {
                                           jobid = x.jobid,
                                           firstName = x.firstName,
                                           id = x.id,
                                           lastName = x.lastName,
                                           middleName = x.middleName,
                                           phone = x.phone,
                                           resume = x.resume,
                                           statusName = s.name,
                                           status = s.id,
                                           email = x.email,
                                           fileName = x.fileName,
                                           createdBy = x.createdBy,
                                           createdDate = x.createdDate,
                                           modifiedBy = x.modifiedBy,
                                           modifiedDate = x.modifiedDate
                                       }).FirstOrDefaultAsync();
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                if (!JobCandidatesExists(id))
                {
                    response.Success = false;
                    response.Message = "Unable to find candidate";
                    return response;
                }
                else
                {
                    response.Success = false;
                    response.Message = ex.Message;
                    return response;
                }
            } 
            catch(Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return response;
            }

            return response;
        }

        // POST: api/JobCandidates
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ServiceResponse<int>> PostJobCandidates(JobCandidates jobCandidates)
        {
            var response = new ServiceResponse<int>();
            try
            {
                jobCandidates.createdDate = DateTime.Now;
                _context.JobCandidates.Add(jobCandidates);
                await _context.SaveChangesAsync();
                response.Success = true;
                response.Data = jobCandidates.id;
                response.Message = "Added Successfully";
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.InnerException != null && ex.InnerException.Message.IndexOf("duplicate") > 0 ? "Candidate already added" :   ex.Message.IndexOf("duplicate") > 0 ? "Candidate already added" : ex.Message;
            }
            return response;
            
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
