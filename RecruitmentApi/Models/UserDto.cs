﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecruitmentApi.Models
{
    public class UserDto
    {
        public int id { get; set; }

        public string firstName { get; set; }

        public string middleName { get; set; }

        public string lastName { get; set; }

        public string userid { get; set; }

        public string email { get; set; }

        public string password { get; set; }

        public int roleId { get; set; }
    }
}