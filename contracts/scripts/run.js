const hre = require("hardhat");
const ethers = hre.ethers;
const file = require("./../artifacts/contracts/MarketPlace.sol/MarketPlace.json");

async function main() {
    const address = "0x87DcCE68e38DA2c9B8D8577fB1AdA5Cc3baA5A72";
    const [deployer] = await ethers.getSigners();
    const abi = file.abi;
    const provider = new ethers.providers.JsonRpcProvider();
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);

    const result = await contract.addBook(1, "0xA00000000000000000000000000000000000DeaD", 1000);
    const result2 = await contract.addBook(2, "0xb00000000000000000000000000000000000dEaD", 1000);
    const result3 = await contract.addBook(3, "0xc00000000000000000000000000000000000dEaD", 1000);
    const result4 = await contract.addBook(4, "0xd00000000000000000000000000000000000dEaD", 1000);
    const result5 = await contract.addBook(5, "0xe00000000000000000000000000000000000dEaD", 1000);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
