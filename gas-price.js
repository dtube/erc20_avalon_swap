const Web3 = require('web3')
var web3 = new Web3("https://kovan.infura.io/v3/"+config.infuraKey);

module.exports = function() {
    web3.eth.getGasPrice(function(err, res) {
        if (err) throw err
        if (res != ethGasPrice) {
            ethGasPrice = res
            console.log('Ethereum Gas Price: '+Math.round(ethGasPrice/1000000000)+' Gwei')
            let txFeeEth = ethGasPrice * avgGasUsedPerTx / Math.pow(10, 18)
            txFeeDtc = Math.ceil(100 * txFeeEth / dtcEther)
            console.log('Tx Fee: '+txFeeEth+' ETH or '+txFeeDtc/100+' DTUBE')
        }
    })
}