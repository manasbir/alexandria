require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "Tde-pmHLaz_hjzB_W-9hRt-CSMWsjM44";
const GOERLI_PRIVATE_KEY = "8e58496385ea67645947fc5973b7b86bd33385460b2e1b04ed471bbe8631e9ac";


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
