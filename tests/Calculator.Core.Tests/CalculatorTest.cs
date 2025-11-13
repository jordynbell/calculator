using System.Security.Cryptography.X509Certificates;

namespace Calculator.Test
{
    [TestClass]
    public sealed class CalculatorTest
    {
        [TestMethod]
        public void Add_TwoNumbers_ReturnsSum()
        {
            // Arrange
            var calculator = new Core.Calculator();
            // Act
            var actual = calculator.Add(2, 3);
            // Assert
            Assert.AreEqual(5, actual);
        }

        [TestMethod]
        public void Subtract_TwoNumbers_ReturnsDifference()
        {
            // Arrange
            var calculator = new Core.Calculator();
            // Act
            var actual = calculator.Subtract(5, 3);
            // Assert
            Assert.AreEqual(2, actual);
        }

        [TestMethod]
        public void Divide_PositiveNumbers_ReturnsQuotient()
        {
            // Arrange
            var calculator = new Core.Calculator();
            // Actual
            var actual = calculator.Divide(6, 3);
            // Assert
            Assert.AreEqual(2, actual);
        }

        [TestMethod]
        public void Divide_DivideByZero_ThrowsDivideByZeroException()
        {
            // Arrange
            var calculator = new Core.Calculator();
            // Actual + Assert 1
            var ex = Assert.ThrowsException<DivideByZeroException>(() => calculator.Divide(3, 0));
            // Assert 2
            Assert.AreEqual("Cannot divide by zero.", ex.Message);
        }

        [TestMethod]
        public void Multiply_TwoNumbers_ReturnsProduct()
        {
            // Arrange
            var calculator = new Core.Calculator();
            // Actual
            var actual = calculator.Multiply(2, 3);
            // Assert
            Assert.AreEqual(6, actual);
        }

        [TestMethod]
        public void PowerOf_ExponentZero_ReturnsOne()
        {
            // Arrange
            var calculator = new Core.Calculator();
            // Actual
            var actual = calculator.PowerOf(21, 0);
            // Assert
            Assert.AreEqual(1, actual);
        }

        [TestMethod]
        public void PowerOf_PositiveExponent_ReturnsCorrectValue()
        {
            // Arrange
            var calculator = new Core.Calculator();
            // Actual
            var actual = calculator.PowerOf(2, 3);
            // Assert
            Assert.AreEqual(8, actual);
        }

        [TestMethod]
        public void SquareRoot_NegativeNumber_ThrowsArgumentException()
        {
            // Arrange
            var calculator = new Core.Calculator();
            // Actual + Assert
            var ex = Assert.ThrowsException<ArgumentException>(() => calculator.SquareRoot(-3));
            // Assert
            Assert.AreEqual("Cannot square root a negative number.", ex.Message);
        }

        [TestMethod]
        public void SquareRoot_NonNegativeNumber_ReturnsSquareRoot()
        {
            // Arrange
            var calculator = new Core.Calculator();
            // Actual
            var actual = calculator.SquareRoot(4);
            // Assert
            Assert.AreEqual(2, actual);
        }
    }
}
