require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const ALCHEMY_API_KEY = process.env.A_KEY;
const GOERLI_PRIVATE_KEY = process.env.P_KEY;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
