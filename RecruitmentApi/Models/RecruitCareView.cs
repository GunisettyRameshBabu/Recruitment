using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecruitmentApi.Models
{
    public class RecruitCareView 
    {
        public int id { get; set; }

        public string firstName { get; set; }

        public string middleName { get; set; }

        public string lastName { get; set; }

        public string name { get; set; }

        public string email { get; set; }

        public int jobid { get; set; }

        public string comments { get; set; }

        public string phone { get; set; }

        public string statusName { get; set; }

        public int createdBy { get; set; }

        public string createdByName { get; set; }

        public DateTime? modifiedDate { get; set; }

        public int? modifiedBy { get; set; }

        public string modifiedName { get; set; }

        public int status { get; set; }

        public DateTime createdDate { get; set; }
        public string jobName { get; internal set; }

        public string fileName { get; set; }

        public int noticePeriod { get; set; }

        public string notice { get; set; }
    }
}
