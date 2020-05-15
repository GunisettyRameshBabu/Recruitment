using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecruitmentApi.Models
{
    public class BaseEntity
    {
        public string createdBy { get; set; }

        public DateTime createdDate { get; set; }

        public string modifiedBy { get; set; }

        public DateTime? modifiedDate { get; set; }
    }
}
