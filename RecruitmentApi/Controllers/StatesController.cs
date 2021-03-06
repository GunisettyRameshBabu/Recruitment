﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecruitmentApi.Data;
using RecruitmentApi.Models;

namespace RecruitmentApi.Controllers
{
    [Authorize]
    [EnableCors("_myAllowSpecificOrigins")]
    [Route("api/[controller]")]
    [ApiController]
    public class StatesController : Base
    {
        private readonly DataContext _context;

        public StatesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/States
        [HttpGet]
        public async Task<ServiceResponse<IEnumerable<StateView>>> GetState()
        {
            var response = new ServiceResponse<IEnumerable<StateView>>();
            try
            {
                response.Data = await (from x in _context.State
                                       join y in _context.Countries on x.Country equals y.Id
                                       join c in _context.Users on x.createdBy equals c.id
                                       join m in _context.Users on x.modifiedBy equals m.id into modifies
                                       from m in modifies.DefaultIfEmpty()
                                       select new StateView()
                                       {
                                           modifiedBy = x.modifiedBy,
                                           Code = x.Code,
                                           Country = x.Country,
                                           createdBy = x.createdBy,
                                           createdByName = Common.GetFullName(c),
                                           createdDate = x.createdDate,
                                           Id = x.Id,
                                           modifiedByName = Common.GetFullName(m),
                                           modifiedDate = x.modifiedDate,
                                           Name = x.Name,
                                           countryName = y.Name
                                       }).AsQueryable().ToListAsync();

                response.Success = true;
                response.Message = "Data Retrived";
            }
            catch (Exception ex)
            {
                response.Success = false;
                 response.Message = await CustomLog.Log(ex, _context);
            }
            return response;
        }

        [Route("GetStatesByCountry/{id}")]
        [HttpGet]
        public async Task<ActionResult<ServiceResponse<IList<State>>>> GetStatesByCountry(int id)
        {
            var response = new ServiceResponse<IList<State>>();
            try
            {
                response.Data = await _context.State.Where(x => x.Country == id).OrderBy(x => x.Name).ToListAsync();
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

        [Route("GetStatesByJobId/{id}")]
        [HttpGet]
        public async Task<ActionResult<ServiceResponse<IList<DropdownModel>>>> GetStatesByJobId(int id)
        {
            var response = new ServiceResponse<IList<DropdownModel>>();
            try
            {
                response.Data = await (from x in _context.State
                                      join j in _context.Openings on x.Country equals j.country
                                      where j.id == id
                                      select new DropdownModel()
                                      {
                                          id = x.Id,
                                          name = x.Name
                                      }).AsQueryable().ToListAsync();
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

        // GET: api/States/5
        [HttpGet("{id}")]
        public async Task<ServiceResponse<State>> GetState(int id)
        {
            var response = new ServiceResponse<State>();
            try
            {
                response.Data = await _context.State.FindAsync(id);
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
                 response.Message = await CustomLog.Log(ex, _context);
            }
            return response;
        }

        // PUT: api/States/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<ServiceResponse<int>> PutState(int id, State state)
        {
            var response = new ServiceResponse<int>();
            try
            {
                if (id != state.Id)
                {
                    response.Success = false;
                    response.Message = "Invalid state";
                    return response;
                }

                var item = _context.State.Find(id);
                if (item == null)
                {
                    response.Success = false;
                    response.Message = "state not found";
                    return response;
                }
                state.modifiedBy = LoggedInUser;
                state.modifiedDate = DateTime.Now;
                _context.Entry(item).CurrentValues.SetValues(state);
                await _context.SaveChangesAsync();
                response.Success = true;
                response.Message = "State updated successfully";
                response.Data = state.Id;
            }
            catch (DbUpdateConcurrencyException ex)
            {
                if (!StateExists(id))
                {
                    response.Success = false;
                    response.Message = "State not found";
                }
                else
                {
                    response.Success = false;
                     response.Message = await CustomLog.Log(ex, _context);
                }
            }
            catch (Exception ex)
            {
                response.Success = false;
                 response.Message = await CustomLog.Log(ex, _context);
            }

            return response;
        }

        // POST: api/States
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ServiceResponse<int>> PostState(State state)
        {
            var response = new ServiceResponse<int>();
            try
            {
                state.createdBy = LoggedInUser;
                state.createdDate = DateTime.Now;
                _context.State.Add(state);
                await _context.SaveChangesAsync();
                response.Data = state.Id;
                response.Success = true;
                response.Message = "Stateadded successfully";
            }
            catch (Exception ex)
            {
                response.Success = false;
                 response.Message = await CustomLog.Log(ex, _context);
            }


            return response;
        }

        [HttpPost("AddBulk")]
        public async Task<ServiceResponse<int>> AddBulk(dynamic state)
        {
            var response = new ServiceResponse<int>();
            try
            {
                
                _context.State.Add(state);
                await _context.SaveChangesAsync();
                response.Data = state.Id;
                response.Success = true;
                response.Message = "State added successfully";
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = await CustomLog.Log(ex, _context);
            }


            return response;
        }

        // DELETE: api/States/5
        [HttpDelete("{id}")]
        public async Task<ServiceResponse<bool>> DeleteState(int id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var masterData = await _context.State.FindAsync(id);
                if (masterData == null)
                {
                    response.Success = false;
                    response.Message = "Invalid City";
                    return response;
                }

                _context.State.Remove(masterData);
                await _context.SaveChangesAsync();
                response.Success = true;
                response.Message = "State deleted successfully";
            }
            catch (Exception ex)
            {
                response.Success = false;
                 response.Message = await CustomLog.Log(ex, _context);
            }


            return response;
        }

        private bool StateExists(int id)
        {
            return _context.State.Any(e => e.Id == id);
        }
    }
}
