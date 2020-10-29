module.exports = {
    avalonSwapAccount: process.env.AVALON_SWAP_ACCOUNT || 'dtube.swap',
    avalonSwapKey: process.env.AVALON_SWAP_KEY || 'fff',
    blocksDisplay: process.env.BLOCKS_DISP || 10,
    ethContractAddress: process.env.CONTRACT_ADDRESS || '0xD2bE59Ad3bcCF4746587e73e1f40528762FB29e3',
    uniswapPoolAddress: process.env.UNISWAP_ADDRESS || '0xc722cd5b8e079cce5e513f1451d287f5c23298cf',
    wethTokenAddress: process.env.WETH_ADDRESS || '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
    infuraKey: process.env.INFURA_KEY || 'fff',
    extraGasPrice: process.env.EXTRA_GAS_PRICE || 2000000000
}