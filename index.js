fs = require('fs')
config = require('./config.js')
headblocks = require('./headblocks.js')
console.log('Head Blocks',headblocks)

// WDTC => DTC
const ContractWatcher = require('./contract-watcher.js')
WDTCWatcher = new ContractWatcher(config.ethContractAddress)
WDTCWatcher.checkBlock(1+headblocks.eth)

// DTC => WDTC
const AvalonWatcher = require('./avalon-watcher.js')
DTCWatcher = new AvalonWatcher(config.avalonSwapAccount)
DTCWatcher.checkBlock(1+headblocks.avalon)

process.on('SIGINT', function() {
    fs.writeFileSync('./headblocks.js', "module.exports={eth:"+headblocks.eth+",avalon:"+headblocks.avalon+"}")
    process.exit(0)
})