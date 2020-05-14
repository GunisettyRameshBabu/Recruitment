﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecruitmentApi.Models
{
    public class OpeningsListView
    {
        public string jobid { get; set; }

        public string jobtitle { get; set; }

        public string assaignedTo { get; set; }

        public string city { get; set; }

        public string client { get; set; }

        public string contactName { get; set; }

        public string accountManager { get; set; }

        public string status { get; set; }

        public DateTime targetdate { get; set; }
    }
}