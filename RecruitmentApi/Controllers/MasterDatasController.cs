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
    public class MasterDatasController : ControllerBase
    {
        private readonly DataContext _context;

        public MasterDatasController(DataContext context)
        {
            _context = context;
        }

        // GET: api/MasterDatas
        [HttpGet]
        public async Task<ServiceResponse<IEnumerable<MasterDataView>>> GetMasterData()
        {
            var response = new ServiceResponse<IEnumerable<MasterDataView>>();
            try
            {
                response.Data = await (from x in _context.MasterData
                                       join y in _context.MasterDataType on x.type equals y.id
                                       join c in _context.Users on x.createdBy equals c.id
                                       join m in _context.Users on x.modifiedBy equals m.id into modifies
                                       from m in modifies.DefaultIfEmpty()
                                       select new MasterDataView()
                                       {
                                            id = x.id,
                                            modifiedBy = x.modifiedBy,
                                            createdBy = x.createdBy,
                                            createdDate = x.createdDate,
                                            createdName = c.firstName + " " + (c.middleName ?? "")  +  " " + c.lastName,
                                            modifedName = (m != null ? m.firstName + " " + (m.middleName ?? "") + " " + m.lastName : ""),
                                            modifiedDate = x.modifiedDate,
                                            name = x.name,
                                            type = x.type,
                                            typeName = y.name
                                       }).ToListAsync();
                        ;
                response.Success = true;
                response.Message = "Data Retrived";
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }
            return response;
        }

        // GET: api/MasterDatas/5
        [HttpGet("{id}")]
        public async Task<ServiceResponse<MasterData>> GetMasterData(int id)
        {
            var response = new ServiceResponse<MasterData>();
            try
            {
                response.Data = await _context.MasterData.FindAsync(id);
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
                response.Message = ex.Message;
            }
            return response;
        }

        // GET: api/MasterDatas/5
        [HttpGet("GetMasterDataByType/{id}")]
        public async Task<ServiceResponse<IList<MasterData>>> GetMasterDataByType(int id)
        {
            var response = new ServiceResponse<IList<MasterData>>();
            try
            {
                
                if (Enum.IsDefined(typeof(MasterDataTypes), id))
                {
                    response.Data = await _context.MasterData.Where(x => x.type == id).ToListAsync();
                    if (response.Data == null)
                    {
                        response.Success = false;
                        response.Message = "Data not found";
                        return response;
                    }
                    response.Success = true;
                    response.Message = "Data Retrived";
                } else
                {
                    response.Success = false;
                    response.Message = "Invalid Master type, please check";
                }
                
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }
            return response;
        }

        // PUT: api/MasterDatas/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<ServiceResponse<int>> PutMasterData(int id, MasterData masterData)
        {
            var response = new ServiceResponse<int>();
            try
            {
                if (id != masterData.id)
                {
                    response.Success = false;
                    response.Message = "Invalid master data";
                    return response;
                }

                var item = _context.MasterData.Find(id);
                if (item == null)
                {
                    response.Success = false;
                    response.Message = "Master Data not found";
                    return response;
                }
                masterData.modifiedDate = DateTime.Now;
                _context.Entry(item).CurrentValues.SetValues(masterData);
                await _context.SaveChangesAsync();
                response.Success = true;
                response.Message = "Master Data updated successfully";
                response.Data = masterData.id;
            }
            catch (DbUpdateConcurrencyException ex)
            {
                if (!MasterDataExists(id))
                {
                    response.Success = false;
                    response.Message = "Master Data not found";
                }
                else
                {
                    response.Success = false;
                    response.Message = ex.Message;
                }
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }

            return response;
        }

        // POST: api/MasterDatas
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ServiceResponse<int>> PostMasterData(MasterData masterData)
        {
            var response = new ServiceResponse<int>();
            try
            {
                _context.MasterData.Add(masterData);
                await _context.SaveChangesAsync();
                response.Data = masterData.id;
                response.Success = true;
                response.Message = "Master data added successfullu";
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }
            

            return response;
        }

        // DELETE: api/MasterDatas/5
        [HttpDelete("{id}")]
        public async Task<ServiceResponse<bool>> DeleteMasterData(int id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var masterData = await _context.MasterData.FindAsync(id);
                if (masterData == null)
                {
                    response.Success = false;
                    response.Message = "Invalid master data";
                    return response;
                }

                _context.MasterData.Remove(masterData);
                await _context.SaveChangesAsync();
                response.Success = true;
                response.Message = "Master data deleted successfully";
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }
           

            return response;
        }

        private bool MasterDataExists(int id)
        {
            return _context.MasterData.Any(e => e.id == id);
        }
    }
}
