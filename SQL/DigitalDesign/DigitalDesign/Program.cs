using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;

namespace DigitalDesign
{
    class Program
    {
        /// <summary>
        ///     Function return tuple.
        /// </summary>
        /// <param name="open"> Starting price for share at the beggining of the day.</param>
        /// <param name="closed"> Ending price for share at the end of the day. </param>
        /// <returns>
        ///     Persentage shows the difference betwin start of trade and the end.
        ///     Flag shows status. If flag is 1 then share has risen, if -1 then fall, 0 means no changes.
        /// </returns>
        private static (decimal, sbyte) Calculate(decimal open, decimal closed)
        {
            decimal percent; sbyte flag;

            percent = (closed * 100 ) / open;
            percent = 100 - percent;
            if(percent < 0)
            {
                flag = -1;
            }
            else if( percent > 0)
            {
                flag = 1;
            }
            else
            {
                flag = 0;
            }           
            return (percent, flag);
        }
        static void Main(string[] args)
        {
            string path = "..\\..\\..\\биржа.xml";
            XDocument xDoc = XDocument.Load(path);
            List<IShare> shares = new List<IShare>();

            foreach (XElement xRow in xDoc.Element("stocks").Elements("row"))
            {
                XAttribute boaredAttribute = xRow.Attribute("BOARDID");
                XAttribute secidAttribute = xRow.Attribute("SECID");
                XAttribute shortnameAttribute = xRow.Attribute("SHORTNAME");
                XAttribute openAttribute = xRow.Attribute("OPEN");
                XAttribute closeAttribute = xRow.Attribute("CLOSE");

                if (boaredAttribute.Value == "TQBR")
                {
                    if(openAttribute.Value != "" || closeAttribute.Value != "")
                    {
                        var share = new Share(boaredAttribute.Value, secidAttribute.Value, shortnameAttribute.Value, decimal.Parse(openAttribute.Value), decimal.Parse(closeAttribute.Value));
                        shares.Add(share);
                        Console.WriteLine($"Организация: {shortnameAttribute.Value}");
                        Console.WriteLine($"Тикер: {secidAttribute.Value}");
                        Console.WriteLine();
                        Console.WriteLine();
                    }
                }
            }
            var (percent, status) = Calculate(12, 14);

            Console.WriteLine($"{Math.Abs(Math.Round(percent, 4)).ToString()}");
            Console.ReadKey();
        }
    }
}
