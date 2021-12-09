using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentApi.Model;
using System.Collections.Generic;

namespace StudentApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        [HttpGet("GetStudentDetails")]
        public IActionResult Get()
        {
            List<StudentModel> studentModels = new();

            StudentModel studentModel1 = new StudentModel
            {
                Id = 1,
                Name = "Sam Smith",
                Email = "abc@gg.com",
                PhoneNo = "123456"
            };
            studentModels.Add(studentModel1);
            StudentModel studentModel2 = new StudentModel
            {
                Id = 2,
                Name = "Jhon Parker",
                Email = "abc1@gmail.com",
                PhoneNo = "9787676"
            };
            studentModels.Add(studentModel2);

            return Ok(studentModels);
        }
    }
}
