using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecruitmentApi.Models
{
    public class Openings
    {
        public int id { get; set; }

        public string jobid { get; set; }

        public string jobtitle { get; set; }

        public string assaignedTo { get; set; }

        public DateTime createdate { get; set; }

        public DateTime? modifieddate { get; set; }
        
        public string  modifiedBy { get; set; }

        public string createdBy { get; set; }

        public DateTime targetdate { get; set; }

        public int status { get; set; }

        public int country { get; set; }

        public int state { get; set; }

        public int city { get; set; }

        public int client { get; set; }

        public bool isclientConfidencial { get; set; }

        public string contactName { get; set; }

        public int jobtype { get; set; }

        public string accountManager { get; set; }

        public int industry { get; set; }

        public int experience { get; set; }

        public string salary { get; set; }

        public string zip { get; set; }

        public string description { get; set; }
    }

}
