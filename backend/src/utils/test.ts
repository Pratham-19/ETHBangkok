// const { TappdClient } = require('@phala/dstack-sdk');
// const { keccak256 } = require('viem');
// const { privateKeyToAccount } = require('viem/accounts');

// const endpoint = process.env.DSTACK_SIMULATOR_ENDPOINT || 'http://localhost:8090';

// const client = new TappdClient(endpoint);
// app.get('/tappd', async (req, res) => {
//   console.log('Client: ', client);

//   const randomNumString = Math.random().toString();
//   // Call the deriveKey function and pass in the root of trust to derive a key
//   const randomDeriveKey = await client.deriveKey('/', randomNumString);

//   console.log('Derived key: ', randomDeriveKey);
//   // Hash the derivedKey uint8Array value
//   const keccakPrivateKey = keccak256(randomDeriveKey.asUint8Array());

//   console.log('Keccak private key: ', keccakPrivateKey);
//   // Get the private key account from the derived key hash
//   const account = privateKeyToAccount(keccakPrivateKey);
//   // Return derived key pair
//   return res.status(200).json({ account: account.address, privateKey: keccakPrivateKey });
// });

// app.get('/attest', async (req, res) => {
//   const randomNumString = Math.random().toString();
//   // Generate Remote Attestation Quote based on a random string of data
//   const getRemoteAttestation = await client.tdxQuote(randomNumString);
//   // Return Remote Attestation result
//   res.status(200).json({ getRemoteAttestation });
// });
