const Web3 = require('web3')
var web3 = new Web3('https://cloudflare-eth.com');

module.exports = function(cb) {
    web3.eth.getGasPrice(function(err, res) {
        if (err) throw err
        if (res != ethGasPrice) {
            ethGasPrice = res
            console.log('Gas Price: '+Math.round(ethGasPrice/1000000000)+' Gwei')
            updateFee()
            if (cb) cb()
        }
    })
}