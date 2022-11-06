const hre = require("hardhat");

async function main() {
    const address = "0x87DcCE68e38DA2c9B8D8577fB1AdA5Cc3baA5A72";
    const [deployer] = await ethers.getSigners();
    const provider = new ethers.providers.JsonRpcProvider();

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
