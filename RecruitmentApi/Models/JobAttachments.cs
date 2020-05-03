using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecruitmentApi.Models
{
    public class JobAttachments
    {
        public int id { get; set; }

        public int jobid { get; set; }

        public string userid { get; set; }

        public string comments { get; set; }
    }
}
