fs = require('fs')
config = require('./config.js')
headblocks = require('./headblocks.js')
console.log('Head Blocks',headblocks)

avgGasUsedPerTx = 38074
// update this part once tradable on uniswap with proper DTUBE/ETH rate
dtcDollar = 0.15
ethDollar = 375
dtcEther = Math.round(100000000 * dtcDollar / ethDollar) / 100000000
console.log('DTUBE/ETH = '+dtcEther)

// track ETH Gas Price
ethGasPrice = null
txFeeDtc = null
const updateGasPrice = require('./gas-price.js')
updateGasPrice()
setInterval(updateGasPrice, 60000)

// WDTC => DTC
const ContractWatcher = require('./contract-watcher.js')
WDTCWatcher = new ContractWatcher(config.ethContractAddress)
WDTCWatcher.checkBlock(1+headblocks.eth)

// DTC => WDTC
const AvalonWatcher = require('./avalon-watcher.js')
DTCWatcher = new AvalonWatcher(config.avalonSwapAccount)
DTCWatcher.checkBlock(1+headblocks.avalon)

// safe exit
process.on('SIGINT', function() {
    fs.writeFileSync('./headblocks.js', "module.exports={eth:"+headblocks.eth+",avalon:"+headblocks.avalon+"}")
    process.exit(0)
})