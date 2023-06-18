using BeautyParlor.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.SqlClient;
using System.Configuration;

namespace BeautyParlor.Controllers
{
    public class HomeController : Controller
    {

        //string connectionString = ConfigurationManager.ConnectionStrings["campConnectionString"].ConnectionString;
        string connectionString = "Data Source=.\\SQLEXPRESS;Initial Catalog=BeautyParlorDB;Integrated Security=True;";
        public HomeController()
        {
            
        }
        public ActionResult Index()
        {

            return View();
        }

        public ActionResult Product()
        {
           

            List<Product> selectedProduct = new List<Product>();

            string selectQuery = "SELECT * FROM Product";
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand(selectQuery, connection))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Product product = new Product
                            {
                                ProductId = (int)reader["ProductId"],
                                Name = (string)reader["Name"],
                                Description = (string)reader["Description"],
                                ImageLink = (string)reader["ImageLink"],
                                ProductLink = (string)reader["ProductLink"]
                            };

                            selectedProduct.Add(product);
                        }
                    }
                }
            }
            return View(selectedProduct);

        }

        public ActionResult Reviews()
        {
            return View();
        }
        public ActionResult Dashboard()
        {
            if (Session["isAuthenticated"]=="True")
            {
                List<Message> messages = new List<Message>();

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    string query = "SELECT TOP (1000) [Id], [Name], [Email], [Message], [CreatedAt] FROM [CampDatabase].[dbo].[Messages]";

                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                Message message = new Message
                                {
                                    Id = reader.GetInt32(0),
                                    Name = reader.GetString(1),
                                    Email = reader.GetString(2),
                                    MessageText = reader.GetString(3),
                                    CreatedAt = reader.GetDateTime(4)
                                };

                                messages.Add(message);
                            }
                        }
                    }
                }

                return View(messages);
            
            }
            else return   RedirectToAction("Login", "Account");
        }
        public ActionResult About()
        {
            //ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult Contact()
        {
            //ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult SkinCare()
        {
            //ViewBag.Message = "Skin Care Page.";

            return View();
        }
        public ActionResult HairCare()
        {
            //ViewBag.Message = "Hair Care Page.";

            return View();
        }
        public ActionResult Makeup()
        {
            //ViewBag.Message = "Makeup Page.";

            return View();
        }

        // POST: Contact/SubmitMessage
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SubmitMessage(ContactViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View("Index", model);
            }

            // Save the message to the database or perform any necessary actions
            SaveMessageToDatabase(model);
            ViewBag.Message = "Thank you for contacting us.";
            // Redirect to a thank you page or show a success message
            return RedirectToAction("Contact");
        }

        private void SaveMessageToDatabase(ContactViewModel model)
        {
           
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string query = "INSERT INTO Messages (Name, Email, Message, CreatedAt) VALUES (@Name, @Email, @Message, @CreatedAt)";
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@Name", model.Name);
                    command.Parameters.AddWithValue("@Email", model.Email);
                    command.Parameters.AddWithValue("@Message", model.Message);
                    command.Parameters.AddWithValue("@CreatedAt", DateTime.Now);
                    command.ExecuteNonQuery();
                }
            }
        }
    }
}