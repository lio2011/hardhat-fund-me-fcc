require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-deploy")
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "42b53650-877e-46a0-b290-3ae26b3d6fdb"
const SEPOLIA_RPC_URL =
    process.env.SEPOLIA_RPC_URL ||
    "https://eth-sepolia.g.alchemy.com/v2/LNXahQ97zSlfT_PbG1dnpPcGovlwebrk"
const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "6b40b0a9373f1637ca51d807d9dba19d416d4e4ce48e712b8b56f0847fae8130"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "JCVABP88HWJKP4H469WTWIT59N8M6VGHMB"

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            // gasPrice: 130000000000,
        },
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
            blockConfirmations: 6,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.7",
            },
            {
                version: "0.6.6",
            },
        ],
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
        // customChains: [], // uncomment this line if you are getting a TypeError: customChains is not iterable
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        // coinmarketcap: COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
    mocha: {
        timeout: 500000,
    },
}
