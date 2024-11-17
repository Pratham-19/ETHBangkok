# contracts

DataValidatorHook: [0x67C7BeCef338826Bf62b6515d22d26a8D5D4364D](https://base-sepolia.blockscout.com/address/0x67C7BeCef338826Bf62b6515d22d26a8D5D4364D?tab=contract)
SchemaId: [0x4e0](https://testnet-scan.sign.global/schema/onchain_evm_84532_0x4e0)
DataAttester: [0xe88dE5fc54Ce484E6F5911cb599625892AC342D2](https://base-sepolia.blockscout.com/address/0xe88dE5fc54Ce484E6F5911cb599625892AC342D2?tab=contract)

Random Number Generator: [0x0d8F22c948d3A9D78A5Eae21eEE5a9D0A7B98F93](https://base-sepolia.blockscout.com/address/0x0d8F22c948d3A9D78A5Eae21eEE5a9D0A7B98F93?tab=contract)

PriceAttester:0xcfd5c18cef35c9C67b93ab97e860F61fb4db7Cd8
SchamId: [0x4e8](https://testnet-scan.sign.global/schema/onchain_evm_84532_0x4e8)
Attestation: https://testnet-scan.sign.global/attestation/onchain_evm_84532_0xd78


## Deploying Sign Protocol Attester

1. DataValidatorHook
    ```
    make deployDataValidatorHook ARGS="--network baseSepolia"
    ```

2. Deploy Your Schema 
   
3. DataAttester
    ```
    make deployDataAttester ARGS="--network baseSepolia"
    ```

4. Set Schema ID
    ```
    make setSchemaId ARGS="--network baseSepolia"
    ```

5. Set SPInstance
    ```
    make setSPInstance ARGS="--network baseSepolia"
    ```

6. (optional) Test Attest
    ```
    make testPriceAttest ARGS="--network baseSepolia"
    ```

## Deploying Random Number 

1. Deploy
    ```
    make deployRandomNumber ARGS="--network baseSepolia"
    ```

## Deploy Email Prover 

address:0x0Cef362585622762049eF968eD6f3C28Ba4bab67

```
make deployEmailProver ARGS="--network baseSepolia"
```


## Deployging ERC20 Token
TokenA: 0xeD034F04d39eaE3188a7F2B3D47450A49a51d487
TokenB: 0xeD034F04d39eaE3188a7F2B3D47450A49a51d487
TokenC: 0x8a2839412844Fc19bC9d9d0A5d29Bb4023507A25
TokenD: 0xC240E75273fd042cde138B488340c233B24EADFC

```
make deployTokenA ARGS="--network baseSepolia"
make deployTokenB ARGS="--network baseSepolia"
make deployTokenC ARGS="--network baseSepolia" 
make deployTokenD ARGS="--network baseSepolia" 
```

## Deploying Vault 

Vault: 0x26BCc57c48A0dc3d0FF197Fb52d8172dbf9f8c3f

```
make deployVault ARGS="--network baseSepolia"
```

## Deploy Claim

Claim: 0x128280B36551872E688cF2945A7baBE3878F508a

## Deploy PriceFeed 

PriceFeed: 0x89468BC8d75cbD048b846D31F4f3E6F7EE6686EC

```
make deployPriceFeed ARGS="--network baseSepolia"
```

## Deploying PriceFeedValidatorHook

PriceFeedValidatorHook: 0x318DFB920703f8aAB90670028E877D508A5314Ac

```
make deployPriceValidatorHook ARGS="--network baseSepolia"
```