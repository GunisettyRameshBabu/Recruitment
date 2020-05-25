using System;
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
    public class ClientCodesController : ControllerBase
    {
        private readonly DataContext _context;

        public ClientCodesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/ClientCodes
        [HttpGet]
        public async Task<ServiceResponse<IEnumerable<ClientCodes>>> GetClientCodes()
        {
            var response = new ServiceResponse<IEnumerable<ClientCodes>>();
            try
            {
                response.Data = await _context.ClientCodes.ToListAsync();
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

        // GET: api/ClientCodes/5
        [HttpGet("{id}")]
        public async Task<ServiceResponse<ClientCodes>> GetClientCodes(int id)
        {
            var response = new ServiceResponse<ClientCodes>();
            try
            {
                response.Data = await _context.ClientCodes.FindAsync(id);
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

        // PUT: api/ClientCodes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<ServiceResponse<int>> PutClientCodes(int id, ClientCodes clientCodes)
        {
            var response = new ServiceResponse<int>();
            try
            {
                if (id != clientCodes.Id)
                {
                    response.Success = false;
                    response.Message = "Invalid Client";
                    return response;
                }

                var item = _context.ClientCodes.Find(id);
                if (item == null)
                {
                    response.Success = false;
                    response.Message = "Client not found";
                    return response;
                }
                _context.Entry(item).CurrentValues.SetValues(clientCodes);
                await _context.SaveChangesAsync();
                response.Success = true;
                response.Message = "Client updated successfully";
                response.Data = clientCodes.Id;
            }
            catch (DbUpdateConcurrencyException ex)
            {
                if (!ClientCodesExists(id))
                {
                    response.Success = false;
                    response.Message = "Client not found";
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

        // POST: api/ClientCodes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ServiceResponse<int>> PostClientCodes(ClientCodes clientCodes)
        {
            var response = new ServiceResponse<int>();
            try
            {
                _context.ClientCodes.Add(clientCodes);
                await _context.SaveChangesAsync();
                response.Data = clientCodes.Id;
                response.Success = true;
                response.Message = "Master data type added successfully";
            }
            catch (Exception ex)
            {
                response.Success = false;
                 response.Message = await CustomLog.Log(ex, _context);
            }


            return response;
        }

        // DELETE: api/ClientCodes/5
        [HttpDelete("{id}")]
        public async Task<ServiceResponse<bool>> DeleteClientCodes(int id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var masterData = await _context.ClientCodes.FindAsync(id);
                if (masterData == null)
                {
                    response.Success = false;
                    response.Message = "Invalid Client";
                    return response;
                }

                _context.ClientCodes.Remove(masterData);
                await _context.SaveChangesAsync();
                response.Success = true;
                response.Message = "Client deleted successfully";
            }
            catch (Exception ex)
            {
                response.Success = false;
                 response.Message = await CustomLog.Log(ex, _context);
            }


            return response;
        }

        private bool ClientCodesExists(int id)
        {
            return _context.ClientCodes.Any(e => e.Id == id);
        }
    }
}
