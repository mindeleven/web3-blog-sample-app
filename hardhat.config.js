require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      // Chain ID of MetaMask Localhost 8545 configuration
      // run 'ganache-cli --port 8545 --chainId 5777' first
      chainId: 5777 // 1337
    },
    mumbai: {
       // url: "https://rpc-mumbai.matic.today",
       // infure endpoint
       url: "https://polygon-mumbai.infura.io/v3/9536088e10d64ec5b680a4dc31825168",
       accounts: [process.env.pk]
    },
    polygon: {
       // url: "https://polygon-rpc.com/",
       // infure endpoint
       url: "https://mainnet.infura.io/v3/9f09b087b15e434e9e27947856d54205",
       accounts: [process.env.pk]
    }
  }
};
