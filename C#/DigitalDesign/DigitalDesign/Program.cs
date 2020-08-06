using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace DigitalDesign
{
    class Program
    {
        public static HttpClient https = new HttpClient();
        public static List<string> list = new List<string>();
        [HttpGet]
        public static async void Get() 
        {
            https.BaseAddress = new Uri("https://fish-text.ru/get");
            var response = await https.GetAsync(https.BaseAddress);
            if (response.IsSuccessStatusCode)
            {
                //    list = await response.Content.ReadAsAsync<string>();//
            }

            list.Add(response.ToString());
        }


        static void Main(string[] args)
        {
            Console.WriteLine("Куда хотите сохранить файл? Введите путь");
            string path = Console.ReadLine();
            Console.WriteLine("Сколько файлов должно быть сгенерировано?");
            int quantity = int.Parse(Console.ReadLine());

            Random rand = new Random();

            // Hard codding way to insert text to .txt files
            //List<string> text = new List<string>() { "Hello world!", "How are you?" };

            Get();
            try
            {
                for (int i = 1; i <= quantity; i++)
                {
                    int x = rand.Next(-10, 200);
                    var filePath = $"{path}\\LightTextFile{x}.txt";
                    File.WriteAllLines(filePath, list);
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
