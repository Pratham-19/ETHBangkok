# contracts

DataValidatorHook: [0xba4C071bb83dCC799311b7BF1077D837212FeA3d](https://base-sepolia.blockscout.com/address/0xba4C071bb83dCC799311b7BF1077D837212FeA3d?tab=contract)
SchemaId: [0x42d](https://testnet-scan.sign.global/schema/onchain_evm_84532_0x42d)
DataAttester: [0xDe1AF713E820D2DEa275d5d18C5f5a313284f06D](https://base-sepolia.blockscout.com/address/0xDe1AF713E820D2DEa275d5d18C5f5a313284f06D?tab=contract)


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
    make testAttest ARGS="--network baseSepolia"
    ```