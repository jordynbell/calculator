using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator.Core
{
    public class Calculator
    {
        public double Add(double a, double b) => a + b;
        public double Subtract(double a, double b) => a - b;
        public double Divide(double a, double b) => b == 0 ? throw new DivideByZeroException("Cannot divide by zero.") : a / b;
        public double Multiply(double a, double b) => a * b;
        public double PowerOf(double a, double b) => Math.Pow(a, b);
        public double SquareRoot(double a) => a < 0 ? throw new ArgumentException("Cannot calculate square root of a negative number.") : Math.Sqrt(a);
    }
}
