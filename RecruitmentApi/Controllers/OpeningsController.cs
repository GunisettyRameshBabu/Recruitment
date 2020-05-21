﻿using System;
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
        [HttpGet("GetOpeningsByCountry/{userId}")]
        public async Task<ActionResult<ServiceResponse<OpeningsList>>> GetOpeningsByCountry(int userId)
        {
            var response = new ServiceResponse<OpeningsList>();
            try
            {
                var user = _context.Users.FirstOrDefault(x => x.id == userId);
               
                response.Data = new OpeningsList();
                response.Data.Jobs = await (from o in _context.Openings
                                       join a in _context.Users on o.assaignedTo equals a.id into assaigns
                                       from a in assaigns.DefaultIfEmpty()
                                       join c in _context.Citys on o.city equals c.Id
                                       join cl in _context.ClientCodes on o.client equals cl.Id
                                       join co in _context.Users on o.contactName equals co.id into contacts
                                       from co in contacts.DefaultIfEmpty()
                                       join am in _context.Users on o.accountManager equals am.id into accounts
                                       from am in accounts.DefaultIfEmpty()
                                       join s in _context.MasterData on o.status equals s.id
                                       where o.country == user.country && ((user != null && user.roleId == 1) || (o.createdBy == userId || o.modifiedBy == userId || o.assaignedTo == userId))
                                       select new OpeningsListView()
                                       {
                                           id = o.id,
                                           accountManager = (am == null ? "" : am.firstName + " " + (am.middleName ?? "") + am.lastName),
                                           assaignedTo = (a == null ? "" : a.firstName + " " + (a.middleName ?? "") + a.lastName),
                                           city = c.Name,
                                           client = cl.Name,
                                           contactName = (co == null ? "" : co.firstName + " " + (co.middleName ?? "") + co.lastName),
                                           jobid = o.jobid,
                                           jobtitle = o.jobtitle,
                                           status = s.name,
                                           targetdate = o.targetdate
                                       }).ToListAsync();

                response.Data.Candidates = await (from x in _context.JobCandidates
                                                  join s in _context.MasterData on x.status equals s.id
                                                  where response.Data.Jobs.Select(x => x.jobid).Contains(x.jobid)
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
                                                      fileName = x.fileName
                                                  }).ToListAsync();
                response.Success = true;
                response.Message = "Success";
            }
            catch (Exception ex)
            {
                response.Success = false;
                 response.Message = await CustomLog.Log(ex, _context);
            }

            return Ok(response);

        }

        // GET: api/Openings/5
        [HttpGet("{id}")]
        public async Task<ServiceResponse<OpeningsView>> GetOpenings(string id)
        {
            var response = new ServiceResponse<OpeningsView>();
            try
            {
                var openings = await (from x in _context.Openings
                                      join cr in _context.Users on x.createdBy equals cr.id
                                      join st in _context.MasterData on x.status equals st.id
                                      join cou in _context.Countries on x.country equals cou.Id
                                      join sta in _context.State on x.state equals sta.Id
                                      join ci in _context.Citys on x.city equals ci.Id
                                      join ass in _context.Users on x.assaignedTo equals ass.id into assains
                                      from ass in assains.DefaultIfEmpty()
                                      join cl in _context.ClientCodes on x.client equals cl.Id
                                      join con in _context.Users on x.contactName equals con.id into contacts
                                      from con in contacts.DefaultIfEmpty()
                                      join acc in _context.Users on x.accountManager equals acc.id into accounts
                                      from acc in accounts.DefaultIfEmpty()
                                      join exp in _context.MasterData on x.experience equals exp.id
                                      join indus in _context.MasterData on x.industry equals indus.id
                                      join types in _context.MasterData on x.jobtype equals types.id


                                      where x.jobid == id
                                      select new OpeningsView()
                                      {
                                          jobid = x.jobid,
                                          accountManager = (acc == null ? "" : acc.firstName + " " + (acc.middleName ?? "") + acc.lastName),
                                          state = sta.Name,
                                          country = cou.Name,
                                          assaigned = (ass == null ? "" : ass.firstName + " " + (ass.middleName ?? "") + ass.lastName),
                                          city = ci.Name,
                                          client = cl.Name,
                                          contactName = (con == null ? "" : con.firstName + " " + (con.middleName ?? "") + con.lastName),
                                          description = x.description,
                                          experience = exp.name,
                                          jobtitle = x.jobtitle,
                                          status = st.name,
                                          zip = x.zip,
                                          targetDate = x.targetdate,
                                          salary = x.salary,
                                          createdBy = (cr == null ? "" : cr.firstName + " " + (cr.middleName ?? "") + cr.lastName),
                                          industry = indus.name,
                                          jobtype = types.name,
                                          company_url = cl.url

                                      }).FirstOrDefaultAsync();

                if (openings == null)
                {
                    response.Message = "Job Id not found";
                    response.Success = false;
                    return response;
                }

                openings.Candidates = (from x in _context.JobCandidates
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
                                          fileName = x.fileName
                                      }).ToList();
                response.Data = openings;
                response.Message = "Success";
                response.Success = true;
            }
            catch (Exception ex)
            {
                 response.Message = await CustomLog.Log(ex, _context);
                response.Success = false;
                return response;
            }


            return response;
        }
        // GET: api/Openings/
        [HttpGet("GetOpeningById/{id}")]
        public async Task<ServiceResponse<Openings>> GetOpeningById(int id)
        {
            var response = new ServiceResponse<Openings>();
            try
            {
                response.Data = _context.Openings.Find(id);
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


        // GET: api/Openings/
        [HttpGet("GetJobs/{id}")]
        public async Task<ServiceResponse<IList<DropdownModel>>> GetJobs(int id)
        {
            var response = new ServiceResponse<IList<DropdownModel>>();
            try
            {
                response.Data = await (from x in _context.Openings
                                      select new DropdownModel()
                                      {
                                         id = x.id,
                                          name = x.jobid + " - " + x.jobtitle
                                      }).ToListAsync();
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
        // PUT: api/Openings/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<ServiceResponse<bool>> PutOpenings(int id, Openings openings)
        {
            var response = new ServiceResponse<bool>();
            if (id != openings.id)
            {
                response.Success = false;
                response.Message = "Invalid job id , Please check";
            }
           

            try
            {
                openings.modifiedDate = DateTime.Now;
                var job = _context.Openings.Find(id);
                _context.Entry(job).CurrentValues.SetValues(openings);
                await _context.SaveChangesAsync();
                response.Success = true;
                response.Message = "Job Opening updated successfully";
                response.Data = true;
            }
            catch (DbUpdateConcurrencyException ex)
            {
                response.Success = false;
                if (!OpeningsExists(id))
                {
                    response.Message = "Invalid job id , Please check";
                }
                else
                {
                     response.Message = await CustomLog.Log(ex, _context);
                }
            }

            return response;
        }

        // POST: api/Openings
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ServiceResponse<bool>>> PostOpenings(Openings openings)
        {
            var response = new ServiceResponse<bool>();

            try
            {
                if (openings == null)
                {
                    response.Success = false;
                    response.Message = "Invalid Response , Please check";
                    return Ok(response);
                }

                openings.createdDate = DateTime.Now;

                _context.Openings.Add(openings);
                await _context.SaveChangesAsync();

                response.Success = true;
                response.Message = "Job Opening added successfully";
                response.Data = true;
            }
            catch (Exception ex)
            {
                response.Success = false;
                 response.Message = await CustomLog.Log(ex, _context);
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
