using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;
using Newtonsoft.Json;

namespace DigitalDesign
{
    class Program
    {
        public static HttpClient https = new HttpClient();
        public static string responseBody;
        [HttpGet]
        public static async void Get() 
        {

            HttpResponseMessage response = await https.GetAsync("https://fish-text.ru/get");
            response.EnsureSuccessStatusCode();
            responseBody = await response.Content.ReadAsStringAsync();

            Console.WriteLine(responseBody);
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
            List<string> result = responseBody.Split('\t').ToList();
            try
            {
                for (int i = 1; i <= quantity; i++)
                {
                    int x = rand.Next(-10, 200);
                    var filePath = $"{path}\\LightTextFile{x}.txt";
                    
                    File.WriteAllLines(filePath, result);
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
