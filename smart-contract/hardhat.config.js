require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: __dirname + '/.env' })

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_URL = process.env.API_URL;

module.exports = {
  solidity: "0.8.9",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  networks: {
    sepolia: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
      gasPrice: 20000000000,
    },
  },
};