var Web3 = require("web3");

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost8545"));
console.log(web3.eth.acounts)
