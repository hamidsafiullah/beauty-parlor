using BeautyParlor.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BeautyParlor.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account/Login
        [HttpGet]
        public ActionResult Login()
        {
            Session.Clear();
            return View();
        }

        // POST: Account/Login
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(LoginViewModel model)
        {
           
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            // TODO: Validate the user's credentials (e.g., check against a database, API, etc.)
            if (IsValidUser(model.Email, model.Password))
            {
                Session["Email"] = model.Email;
                Session["isAuthenticated"] ="True";
                return RedirectToAction("Dashboard", "Home");
            }

            ModelState.AddModelError("", "Invalid email or password.");
            return View(model);
        }

        private bool IsValidUser(string email, string password)
        {
            //string connectionString = ConfigurationManager.ConnectionStrings["campConnectionString"].ConnectionString;
            string connectionString = "Data Source=.\\SQLEXPRESS;Initial Catalog=BeautyParlorDB;Integrated Security=True;";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                string query = "SELECT COUNT(*) FROM Users WHERE Email = @Email AND Password = @Password";

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@Email", email);
                    command.Parameters.AddWithValue("@Password", password);

                    int result = (int)command.ExecuteScalar();

                    // Return true if a matching user is found, otherwise return false
                    return result > 0;
                }
            }
                    
        }
    }
}


