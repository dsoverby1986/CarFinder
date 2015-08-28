﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CarFinder.Models
{
    public class Car
    {
        public int id { get; set; }
        public string make { get; set; }
        public string make_display { get; set; }
        public string model_name { get; set; }
        public string model_trim { get; set; }
        public string model_year { get; set; }
        public string body_style { get; set; }
        public string engine_num_cyl { get; set; }
        public string engine_power_ps { get; set; }
        public string engine_fuel { get; set; }
        public string transmission_type { get; set; }
        public string seats { get; set; }
        public string doors { get; set; }
    }
}