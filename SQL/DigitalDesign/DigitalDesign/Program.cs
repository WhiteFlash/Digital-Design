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
        private static (decimal, sbyte) CalculateShares(decimal open, decimal closed)
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
        
        private static void CustomSortArray(Share[] sharesArray)
        {
            Share temp;
            // преобразования, чтобы от null избавиться в массиве. Надо потом доделать.
            //var x = sharesArray.ToList();
            //foreach(var m in x)
            //{
            //    if(m == null) { x.Remove(m); }
            //}
            //sharesArray = x.ToArray();
            for (int i = 0; i < sharesArray.Length - 1; i++)
            {

                for (int j = i + 1; j < sharesArray.Length; j++)
                {
                    if (sharesArray[j] == null)
                    {
                        break;
                    }
                    if (sharesArray[i].Percent > sharesArray[j].Percent)
                    {
                        temp = sharesArray[i];
                        sharesArray[i] = sharesArray[j];
                        sharesArray[j] = temp;
                    }
                }
            }
        }
        static void Main(string[] args)
        {
            string path = "..\\..\\..\\биржа.xml";
            XDocument xDoc = XDocument.Load(path);
            var shares = new List<Share>();

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
                        //Console.WriteLine($"Организация: {shortnameAttribute.Value}");
                        //Console.WriteLine($"Тикер: {secidAttribute.Value}");
                        //Console.WriteLine();
                        //Console.WriteLine();
                    }
                }
            }

            var sharesArray = new Share[shares.Count];
            var count = 0;

            foreach(var x in shares)
            {                
                var (percent, status) = CalculateShares(x.Open, x.Close);
                if(status > 0)
                {
                    sharesArray[count] = x;
                    sharesArray[count].Percent = percent;
                    count++;
                }
            }

            // Стандартная сортировка, которая не работает совсем.
            //shares = sharesArray.ToList();
            //shares.Sort((x, y) => x.Percent.CompareTo(y.Percent));
            //var context = from element in shares
            //              orderby element.Percent 
            //              select element;

            CustomSortArray(sharesArray);
            count = 0;
            for (var x = sharesArray.Length-1; x > -1; x--)
            {
                if (sharesArray[x] == null)
                {
                    continue;
                }
                else
                {
                    Console.WriteLine($"Компания № {count+1}");
                    Console.WriteLine(sharesArray[x].SecID);
                    Console.WriteLine(sharesArray[x].Shortname);
                    Console.WriteLine($"{Math.Round(sharesArray[x].Percent, 5)} % ");
                    Console.WriteLine();
                    count++;
                    if(count == 10) { break; }
                } 
            }
            //foreach (var x in sharesArray)
            //{
            //    if (x == null) { break; }
            //    Console.WriteLine(x.Percent);
            //}

            Console.ReadKey();
        }
    }
}
