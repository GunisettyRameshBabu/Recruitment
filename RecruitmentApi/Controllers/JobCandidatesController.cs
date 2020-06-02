﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecruitmentApi.Data;
using RecruitmentApi.Models;

namespace RecruitmentApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class JobCandidatesController : Base
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
                          join j in _context.Openings on x.id equals j.id
                          join s in _context.MasterData on x.status equals s.id
                          select new JobCandidatesView()
                          {
                              jobid = x.id,
                              jobName = j.jobid,
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
        public async Task<ServiceResponse<List<JobCandidatesView>>> GetByJobId(int id)
        {
            var response = new ServiceResponse<List<JobCandidatesView>>();
            try
            {
                response.Data = await (from x in _context.JobCandidates
                                       join j in _context.Openings on x.jobid equals j.id
                                       join s in _context.MasterData on x.status equals s.id
                                       join t in _context.MasterData on x.totalExp equals t.id into totalExps
                                       from t in totalExps.DefaultIfEmpty()
                                       join r in _context.MasterData on x.relavantExp equals r.id into relavantExps
                                       from r in relavantExps.DefaultIfEmpty()
                                       join b in _context.MasterData on x.bestWayToReach equals b.id into bestways
                                       from b in bestways.DefaultIfEmpty()
                                       join v in _context.MasterData on x.visaType equals v.id into visaTypes
                                       from v in visaTypes.DefaultIfEmpty()
                                       join h in _context.MasterData on x.highestQualification equals h.id into qualifications
                                       from h in qualifications.DefaultIfEmpty()
                                       join st in _context.State on x.state equals st.Id into states
                                       from st in states.DefaultIfEmpty()
                                       join ci in _context.Citys on x.city equals ci.Id into cities
                                       from ci in cities.DefaultIfEmpty()
                                       join cu in _context.Countries on j.country equals cu.Id
                                       join cr in _context.Users on x.createdBy equals cr.id
                                       join md in _context.Users on x.modifiedBy equals md.id into modifies
                                       from md in modifies.DefaultIfEmpty()
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
                                           jobName = j.jobid,
                                           anyOfferExist = x.anyOfferExist,
                                           bestTimeToReach = x.bestTimeToReach,
                                           bestWayToReach = x.bestWayToReach,
                                           city = x.city,
                                           educationDetails = x.educationDetails,
                                           expectedRatePerHour = x.expectedRatePerHour,
                                           highestQualification = x.highestQualification,
                                           relavantExp = x.relavantExp,
                                           rtr = x.rtr,
                                           skypeid = x.skypeid,
                                           state = x.state,
                                           totalExp = x.totalExp,
                                           visaType = x.visaType,
                                           totalExpName = t.name,
                                           relavantExpName = r.name,
                                           bestWayToReachName = b.name,
                                           highestQualificationName = h.name,
                                           visaTypeName = v.name,
                                           cityName = ci.Name,
                                           stateName = st.Name,
                                           countryCode = cu.Code,
                                           modifiedDate = x.modifiedDate,
                                           createdDate = x.createdDate,
                                           createdBy = x.createdBy,
                                           modifiedBy = x.modifiedBy,
                                           createdByName = Common.GetFullName(cr),
                                           modifiedByName = Common.GetFullName(md)
                                       }).AsQueryable().ToListAsync();

                response.Success = true;
                response.Message = "Success";
            }
            catch (Exception ex)
            {
                response.Success = false;
                 response.Message = await CustomLog.Log(ex, _context);
            }
           


            return response;
        }

        // GET: api/JobCandidates/5
        [HttpGet("GetJobCandidatesByStatus/{id}")]
        public async Task<ServiceResponse<List<JobCandidatesView>>> GetJobCandidatesByStatus(int id)
        {
            var response = new ServiceResponse<List<JobCandidatesView>>();
            try
            {
                var user = _context.Users.Find(LoggedInUser);
                var candidates = await (from x in _context.JobCandidates
                                       join j in _context.Openings on x.jobid equals j.id
                                       join s in _context.MasterData on x.status equals s.id
                                       join t in _context.MasterData on x.totalExp equals t.id into totalExps
                                       from t in totalExps.DefaultIfEmpty()
                                       join r in _context.MasterData on x.relavantExp equals r.id into relavantExps
                                       from r in relavantExps.DefaultIfEmpty()
                                       join b in _context.MasterData on x.bestWayToReach equals b.id into bestways
                                       from b in bestways.DefaultIfEmpty()
                                       join v in _context.MasterData on x.visaType equals v.id into visaTypes
                                       from v in visaTypes.DefaultIfEmpty()
                                       join h in _context.MasterData on x.highestQualification equals h.id into qualifications
                                       from h in qualifications.DefaultIfEmpty()
                                       join st in _context.State on x.state equals st.Id into states
                                       from st in states.DefaultIfEmpty()
                                       join ci in _context.Citys on x.city equals ci.Id into cities
                                       from ci in cities.DefaultIfEmpty()
                                       join cu in _context.Countries on j.country equals cu.Id
                                       join cr in _context.Users on x.createdBy equals cr.id
                                       join md in _context.Users on x.modifiedBy equals md.id into modifies
                                       from md in modifies.DefaultIfEmpty()
                                       where x.status == id && j.country == user.country
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
                                           jobName = j.jobid,
                                           anyOfferExist = x.anyOfferExist,
                                           bestTimeToReach = x.bestTimeToReach,
                                           bestWayToReach = x.bestWayToReach,
                                           city = x.city,
                                           educationDetails = x.educationDetails,
                                           expectedRatePerHour = x.expectedRatePerHour,
                                           highestQualification = x.highestQualification,
                                           relavantExp = x.relavantExp,
                                           rtr = x.rtr,
                                           skypeid = x.skypeid,
                                           state = x.state,
                                           totalExp = x.totalExp,
                                           visaType = x.visaType,
                                           totalExpName = t.name,
                                           relavantExpName = r.name,
                                           bestWayToReachName = b.name,
                                           highestQualificationName = h.name,
                                           visaTypeName = v.name,
                                           cityName = ci.Name,
                                           stateName = st.Name,
                                           countryCode = cu.Code,
                                           modifiedDate = x.modifiedDate,
                                           createdDate = x.createdDate,
                                           createdBy = x.createdBy,
                                           modifiedBy = x.modifiedBy,
                                           createdByName = Common.GetFullName(cr),
                                           modifiedByName = Common.GetFullName(md)
                                       }).AsQueryable().ToListAsync();

                var recruits = await (from x in _context.RecruitCare
                                      join y in _context.Openings on x.jobid equals y.id
                                      join s in _context.MasterData on x.status equals s.id
                                      join c in _context.Users on x.createdBy equals c.id
                                      join m in _context.Users on x.modifiedBy equals m.id into modifiedUsers
                                      from m in modifiedUsers.DefaultIfEmpty()
                                      join n in _context.MasterData on x.noticePeriod equals n.id into notices
                                      from n in notices.DefaultIfEmpty()
                                      join t in _context.MasterData on x.totalExp equals t.id
                                      join r in _context.MasterData on x.relavantExp equals r.id
                                      join b in _context.MasterData on x.bestWayToReach equals b.id into bestways
                                      from b in bestways.DefaultIfEmpty()
                                      join v in _context.MasterData on x.visaType equals v.id into visaTypes
                                      from v in visaTypes.DefaultIfEmpty()
                                      join h in _context.MasterData on x.highestQualification equals h.id into qualifications
                                      from h in qualifications.DefaultIfEmpty()
                                      join st in _context.State on x.state equals st.Id
                                      join ci in _context.Citys on x.city equals ci.Id
                                      join co in _context.Countries on y.country equals co.Id
                                      where (user != null && user.roleId == (int)Roles.SuperAdmin) || (x.createdBy == LoggedInUser || x.modifiedBy == LoggedInUser)
                                      select new JobCandidatesView()
                                      {
                                          jobid = y.id,
                                          jobName = y.jobid,
                                          createdBy = x.createdBy,
                                          createdByName = Common.GetFullName(c),
                                          email = x.email,
                                          id = x.id,
                                          modifiedBy = x.modifiedBy,
                                          modifiedByName = Common.GetFullName(m),
                                          modifiedDate = x.modifiedDate,
                                          createdDate = x.createdDate.Value,
                                          firstName = x.firstName,
                                          lastName = x.lastName,
                                          middleName = x.middleName,
                                          phone = x.phone,
                                          status = x.status,
                                          statusName = s.name,
                                          fileName = x.fileName,
                                          anyOfferExist = x.anyOfferExist,
                                          bestTimeToReach = x.bestTimeToReach,
                                          bestWayToReach = x.bestWayToReach,
                                          city = x.city,
                                          educationDetails = x.educationDetails,
                                          expectedRatePerHour = x.expectedRatePerHour,
                                          highestQualification = x.highestQualification,
                                          relavantExp = x.relavantExp,
                                          rtr = x.rtr,
                                          skypeid = x.skypeid,
                                          state = x.state,
                                          totalExp = x.totalExp,
                                          visaType = x.visaType,
                                          totalExpName = t.name,
                                          relavantExpName = r.name,
                                          bestWayToReachName = b.name,
                                          highestQualificationName = h.name,
                                          visaTypeName = v.name,
                                          cityName = ci.Name,
                                          stateName = st.Name,
                                          countryCode = co.Code
                                      }).AsQueryable().ToListAsync();

                response.Data = candidates.Concat(recruits).ToList();
                response.Success = true;
                response.Message = "Success";
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = await CustomLog.Log(ex, _context);
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

                if (User.Identity.IsAuthenticated)
                {
                    var identity = User.Identity as ClaimsIdentity;
                    if (identity != null)
                    {
                        IEnumerable<Claim> claims = identity.Claims;
                    }
                }

                jobCandidates.modifiedBy = LoggedInUser;
                    jobCandidates.modifiedDate = DateTime.Now;
                _context.Entry(job).CurrentValues.SetValues(jobCandidates);
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
                     response.Message = await CustomLog.Log(ex, _context);
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
                     response.Message = await CustomLog.Log(ex, _context);
                    return response;
                }
            } 
            catch(Exception ex)
            {
                response.Success = false;
                 response.Message = await CustomLog.Log(ex, _context);
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
                var jobCandidate = _context.RecruitCare.FirstOrDefault(x => x.jobid == jobCandidates.jobid && x.email == jobCandidates.email);
                if (jobCandidate != null)
                {
                    response.Message = $"Candidate already exist in Recruit care for job {jobCandidate.jobid}, Please move from  Recruit care";
                    response.Success = false;
                    return response;
                }
                jobCandidates.createdBy = LoggedInUser;
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
