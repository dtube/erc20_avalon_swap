// this loads the pooled liquidities on uniswap
// and allows calculating DTC / ETH price
let tokenAddress = config.ethContractAddress
let wethAddress = '0xd0a1e359811322d97991e03f863a0c30c2cf029c'
let uniswapWallet = '0xc722cd5b8e079cce5e513f1451d287f5c23298cf'
let minErc20ABI = [
    {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
    }
];
const Web3 = require('web3')
let web3 = new Web3("https://kovan.infura.io/v3/"+config.infuraKey)

module.exports = async function(cb) {
    let contractDtc = new web3.eth.Contract(minErc20ABI, tokenAddress)
    let contractWeth = new web3.eth.Contract(minErc20ABI, wethAddress)

    let balanceDtc = await contractDtc.methods.balanceOf(uniswapWallet).call()
    let balanceWeth = await contractWeth.methods.balanceOf(uniswapWallet).call()

    balanceDtc /= Math.pow(10,2)
    balanceWeth /= Math.pow(10,18)

    dtcEther = balanceWeth / balanceDtc
    console.log('DTUBE/ETH = '+dtcEther)
    if (cb) cb()
}