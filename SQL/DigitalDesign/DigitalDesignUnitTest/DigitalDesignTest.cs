using Microsoft.VisualStudio.TestTools.UnitTesting;
using DigitalDesign;

namespace DigitalDesignUnitTest
{
    [TestClass]
    public class DigitalDesignTest
    {
        [TestMethod]
        public void CalculateSharesTest()
        {
            //OPEN = OPEN = "24.83 CLOSE="23.75
            var extual = (10M, -1);
            var (percent, flag) = Program.CalculateShares(24.83M, 23.75M);

            Assert.AreEqual(extual.Item1, percent, $"They are not equal {extual.Item1} and {percent}");
            Assert.AreEqual(extual.Item2, flag, $"They are not equal {extual.Item1} and {percent}");

        }
    }
}
