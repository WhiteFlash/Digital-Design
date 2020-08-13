using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;
using Newtonsoft.Json;

namespace DigitalDesign
{
    public class FishResponse
    {
        public string Status { get; set; }
        public string Text { get; set; }
        public IEnumerable<string> TextList { get; set; }
        public void SplitText()
        {
            var sentences = new List<String>();
            int position;
            int start = 0;

            do
            {
                position = this.Text.IndexOf('.', start);
                if (position >= 0)
                {
                    sentences.Add(this.Text.Substring(start, position - start + 1).Trim());
                    start = position + 1;
                }
            }
            while (position > 0);

            this.TextList = sentences;
        }
        class Program
        {

            public static WebClient https = new WebClient();

            static void Main(string[] args)
            {
                Console.WriteLine("Куда хотите сохранить файл? Введите путь");
                string path = Console.ReadLine();
                Console.WriteLine("Сколько файлов должно быть сгенерировано?");
                int quantity = int.Parse(Console.ReadLine());
                Random rand = new Random();

                //string reply = https.DownloadString("https://fish-text.ru/get");

                try
                {
                    for (int i = 1; i <= quantity; i++)
                    {
                        string reply = https.DownloadString("https://fish-text.ru/get");
                        FishResponse fishResponse = JsonConvert.DeserializeObject<FishResponse>(reply);
                        Thread.Sleep(1500);
                        int x = rand.Next(-10, 200);
                        var filePath = $"{path}\\LightTextFile{x}.txt";
                        fishResponse.SplitText();
                        File.WriteAllLines(filePath, fishResponse.TextList);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
                Console.ReadKey();
            }
        }

    }
}
