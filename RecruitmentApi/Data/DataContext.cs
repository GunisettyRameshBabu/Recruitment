using Microsoft.EntityFrameworkCore;
using RecruitmentApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecruitmentApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Users> Users { get; set; }

        public DbSet<Roles> Roles { get; set; }

        public DbSet<JobOpenings> JobOpenings { get; set; }

        public DbSet<JobAttachments> JobAttachments { get; set; }

        public DbSet<Openings> Openings { get; set; }
        public DbSet<Country> Countries { get; set; }

        public DbSet<City> Citys { get; set; }

        public DbSet<ClientCodes> ClientCodes { get; set; }

        public DbSet<RecruitmentApi.Models.Experience> Experience { get; set; }

        public DbSet<RecruitmentApi.Models.Industry> Industry { get; set; }

        public DbSet<RecruitmentApi.Models.JobStatus> JobStatus { get; set; }

        public DbSet<RecruitmentApi.Models.JobTypes> JobTypes { get; set; }

        public DbSet<RecruitmentApi.Models.State> State { get; set; }
    }
}
