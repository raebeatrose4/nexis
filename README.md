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

