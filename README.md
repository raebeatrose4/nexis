# Nexis Swap

## Build Instructions

1. clone the repository
  ```bash
  git clone https://github.com/Nexis-Network/Nexis-Swap
  ```
2. change working directory
   ```
   cd Nexis-Swap
   cd sdk-core-nexis
   ```
3. install sdk-core-nexis dependencies
   ```
   yarn install
   yarn build
   yalc publish
   ```
4. change working directory to interface now
   ```
   cd ..
   cd interface
   yarn install
   ```

5. If the above stuff fails run this
    ```bash
     yalc add @uniswap/sdk-core@4.2.0
     yalc link @uniswap/sdk-core@4.2.0
     yarn lfg
     yarn install
     rm apps/web/src/graphql/data/__generated__/types-and-hooks.ts
     mv types-and-hooks.ts apps/web/src/graphql/data/__generated__/types-and-hooks.ts
     yarn web start
    ```
6. build
   ```
   yarn build:production
   ```

------------------------------------------------------------

Details about the Verified Smart Contracts used in Nexis Swap:

| Contract Name | Contract Address | Explorer URL |
|----------|----------|----------|
| UniswapV2Factory | 0xB7DCc36875fFCA129e2934cf2221566d42d45Be0 | [explorer url](https://evm-testnet.nexscan.io/address/0xB7DCc36875fFCA129e2934cf2221566d42d45Be0) |
| UniswapInterfaceMulticall | 0x7EdBdB96aaBd5F07A499F248DdE70948bDBec16a | [explorer url](https://evm-testnet.nexscan.io/address/0x7EdBdB96aaBd5F07A499F248DdE70948bDBec16a) |
| WETH9 | 0x1F829609216366FE5BB6b98e68441eD6ebBEA1A3 | [explorer url](https://evm-testnet.nexscan.io/address/0x1F829609216366FE5BB6b98e68441eD6ebBEA1A3) |
| UniswapV2Router02 | 0x293983734f2Cc3A5b3b576c806Bcb1489a59092D | [explorer url](https://evm-testnet.nexscan.io/address/0x293983734f2Cc3A5b3b576c806Bcb1489a59092D) |

------------------------------------------------------------

How to deploy abd verify the above mentioned Smart Contracts (using [Remix IDE](https://remix.ethereum.org/):

### UniswapV2Factory
- Upload the Uniswap [v2-core contracts](https://github.com/Uniswap/v2-core/tree/master/contracts) folder in your remix workspace
- Compile the `UniswapV2Factory.sol` contract with Solidity `0.5.16` version
- Deploy the contract 
- Once deployed get the INIT_CODE_HASH 
- To verify the deployed contract, [faltten the contract code by right-clicking](https://docs.xdc.community/get-details/smart-contract-details/flattening-smart-contracts/flattening-smart-contracts-with-remix#flattening-our-smart-contract) on the `UniswapV2Factory.sol` and selecting flatten. This will create a flattened code for the Factory contract which can be used for verifying the contract on Nexis Testnet

### Multicall Contract
- In a new Remix workspace, create a new file called `multicall.sol` and paste the contract source code available on [this link](https://evm-testnet.nexscan.io/address/0x7EdBdB96aaBd5F07A499F248DdE70948bDBec16a?tab=contract)
- Complie this contract using solidity version `0.7.6`
- Deploy the contract 
- Once deployed, verify the contract by using the source code of the contract in Nexis Testnet

### WETH Contract
- In a new Remix workspace, create a new file called `multicall.sol` and paste the contract source code available on [this link]([https://evm-testnet.nexscan.io/address/0x7EdBdB96aaBd5F07A499F248DdE70948bDBec16a?tab=contract](https://evm-testnet.nexscan.io/address/0x1F829609216366FE5BB6b98e68441eD6ebBEA1A3?tab=contract))
- Complie this contract using solidity version `0.4.18`
- Deploy the contract 
- Once deployed, verify the contract by using the source code of the contract in Nexis Testnet

### UniswapV2Router02 Contract
- Add the INIT_CODE [here](https://github.com/Uniswap/v2-periphery/blob/0335e8f7e1bd1e8d8329fd300aea2ef2f36dd19f/contracts/libraries/UniswapV2Library.sol#L24) that you got when deploying the UniswapV2Factory contract
- Compile the `UniswapV2Router02.sol` contract with Solidity `0.6.6` version and enabaling optimization and setting it to **999999** in Advanced Configurations
- Deploy the contract 
- To verify the deployed contract, [faltten the contract code by right-clicking](https://docs.xdc.community/get-details/smart-contract-details/flattening-smart-contracts/flattening-smart-contracts-with-remix#flattening-our-smart-contract) on the `UniswapV2Router02.sol` and selecting flatten. This will create a flattened code for the Router contract which can be used for verifying the contract on Nexis Testnet 
