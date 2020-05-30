using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecruitmentApi.Models
{
    public class RecruitCareView : RecruitCare
    {


        public string name { get; set; }

      
        public string statusName { get; set; }

      

        public string createdByName { get; set; }

       

        public string modifiedName { get; set; }

       
        public string jobName { get; internal set; }

       

        public string notice { get; set; }
    }
}
