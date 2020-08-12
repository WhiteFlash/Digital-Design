using System;
using System.Collections.Generic;
using System.Text;

namespace DigitalDesign
{

    [Serializable]
    public class Share : IShare
    {
        public string BroadID { get; set; }
        public string SecID { get; set; }
        public string Shortname { get; set; }
        public decimal Open { get; set; }
        public decimal Close { get; set; }
        public decimal Percent { get; set; } = 0M;

        public Share() { }

        public Share(string broadid, string secid, string shortname, decimal open, decimal close)
        {
            BroadID = broadid;
            SecID = secid;
            Shortname = shortname;
            Open = open;
            Close = close;
        }
    }
}
