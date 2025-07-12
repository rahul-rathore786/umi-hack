require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// Handle private key correctly by removing 0x prefix if it exists
const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  "0000000000000000000000000000000000000000000000000000000000000000";
const FORMATTED_PRIVATE_KEY = PRIVATE_KEY.startsWith("0x")
  ? PRIVATE_KEY.substring(2)
  : PRIVATE_KEY;
const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL || "https://sepolia.infura.io/v3/your-infura-key";
const FUJI_RPC_URL =
  process.env.FUJI_RPC_URL || "https://api.avax-test.network/ext/bc/C/rpc";
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [FORMATTED_PRIVATE_KEY],
      chainId: 11155111,
    },
    fuji: {
      url: FUJI_RPC_URL,
      accounts: [FORMATTED_PRIVATE_KEY],
      chainId: 43113,
    },
    umi: {
      url: "https://devnet.uminetwork.com",
      accounts: [FORMATTED_PRIVATE_KEY],
      chainId: 42069,
      gasPrice: 20000000000, // 20 gwei
      gas: 6000000, // Gas limit
      timeout: 300000, // 5 minutes
      blockGasLimit: 30000000,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      allowUnlimitedContractSize: true,
    },
  },
  paths: {
    artifacts: "./frontend/src/artifacts",
    cache: "./frontend/src/cache",
  },
};
