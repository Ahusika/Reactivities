using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{ 
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        
        public ActivitiesController(DataContext context)
        {
            _context = context;                 
        }

        [HttpGet]  //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }

        [HttpGet("{id}")]  
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            
            var activity = await _context.Activities.FindAsync(id);

            if (activity == null)
            {
                return NotFound(); // Return a 404 Not Found result
            }

            return activity;
        }
    }
}