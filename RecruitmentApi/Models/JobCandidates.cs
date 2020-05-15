﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecruitmentApi.Models
{
    public class JobCandidates : BaseEntity
    {
        public int id { get; set; }

        public string jobid { get; set; }

        public string firstName { get; set; }

        public string middleName { get; set; }

        public string lastName { get; set; }

        public string phone { get; set; }

        public byte[] resume { get; set; }

        public int status { get; set; }

        public string fileName { get; set; }

        public string email { get; set; }
    }
}
