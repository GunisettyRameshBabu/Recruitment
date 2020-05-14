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
    public class ClientCodesController : ControllerBase
    {
        private readonly DataContext _context;

        public ClientCodesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/ClientCodes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClientCodes>>> GetClientCodes()
        {
            return await _context.ClientCodes.ToListAsync();
        }

        // GET: api/ClientCodes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClientCodes>> GetClientCodes(int id)
        {
            var clientCodes = await _context.ClientCodes.FindAsync(id);

            if (clientCodes == null)
            {
                return NotFound();
            }

            return clientCodes;
        }

        // PUT: api/ClientCodes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClientCodes(int id, ClientCodes clientCodes)
        {
            if (id != clientCodes.Id)
            {
                return BadRequest();
            }

            _context.Entry(clientCodes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientCodesExists(id))
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

        // POST: api/ClientCodes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ClientCodes>> PostClientCodes(ClientCodes clientCodes)
        {
            _context.ClientCodes.Add(clientCodes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClientCodes", new { id = clientCodes.Id }, clientCodes);
        }

        // DELETE: api/ClientCodes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ClientCodes>> DeleteClientCodes(int id)
        {
            var clientCodes = await _context.ClientCodes.FindAsync(id);
            if (clientCodes == null)
            {
                return NotFound();
            }

            _context.ClientCodes.Remove(clientCodes);
            await _context.SaveChangesAsync();

            return clientCodes;
        }

        private bool ClientCodesExists(int id)
        {
            return _context.ClientCodes.Any(e => e.Id == id);
        }
    }
}
