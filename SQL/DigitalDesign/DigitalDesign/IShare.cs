using System;
using System.Collections.Generic;
using System.Text;

namespace DigitalDesign
{
    interface IShare
    {
        public string BroadID { get; set; }
        public string SecID { get; set; }
        public string Shortname { get; set; }
        public decimal Open { get; set; }
        public decimal Close { get; set; }
    }
}
