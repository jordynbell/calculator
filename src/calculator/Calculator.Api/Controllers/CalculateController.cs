using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CoreCalculator = Calculator.Core.Calculator;

namespace Calculator.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculateController(CoreCalculator calculator) : ControllerBase
    {
        private readonly CoreCalculator _calculator = calculator;

        [HttpGet("add")]
        public ActionResult<double> Add([FromQuery] double a, [FromQuery] double b) => _calculator.Add(a, b);

        [HttpGet("subtract")]
        public ActionResult<double> Subtract([FromQuery] double a, [FromQuery] double b) => _calculator.Subtract(a, b);

        [HttpGet("multiply")]
        public ActionResult<double> Multiply([FromQuery] double a, [FromQuery] double b) => _calculator.Multiply(a, b);

        [HttpGet("divide")]
        public ActionResult<double> Divide([FromQuery] double a, [FromQuery] double b)
        {
            try
            {
                return _calculator.Divide(a, b);
            }
            catch (DivideByZeroException ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }
        [HttpGet("power")]
        public ActionResult<double> Power([FromQuery] double a, [FromQuery] double b) => _calculator.PowerOf(a, b);

        [HttpGet("sqrt")]
        public ActionResult<double> Sqrt([FromQuery] double a)
        {
            try
            {
                return _calculator.SquareRoot(a);
            }
            catch(ArgumentException ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

    }
}
