using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager){
            if(!userManager.Users.Any()){
                var user = new AppUser{
                    DisplayName = "Rafik",
                    Email = "rafik@test.com",
                    UserName = "rafik@test.com",
                    Address = new Address{
                        FirstName = "rafik",
                        LastName = "boubaker",
                        Street = "10 The Street",
                        City = "New York",
                        State = "NY",
                        Zipcode = "902120"
                    }
                };
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}