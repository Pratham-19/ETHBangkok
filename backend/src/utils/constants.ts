import dotenv from 'dotenv';

dotenv.config();

const tokens = [
  {
    id: '1',
    latitude: 13.723239281363,
    longitude: 100.55939609285565,
    symbol: 'SHIB',
    name: 'Shiba Inu',
    logoUrl: '/token-pic.png',
    backgroundColor: '#8A2BE2',
  },
  {
    id: '2',
    latitude: 13.723702,
    longitude: 100.55939609285565,
    symbol: 'SHIB',
    name: 'Shiba Inu',
    logoUrl: 'https://www.iconarchive.com/download/i109679/cjdowner/cryptocurrency-flat/Tether-USDT.1024.png',
    backgroundColor: '#8A2BE2',
  },
];

const crates = [
  {
    id: '1',
    latitude: 13.726441,
    longitude: 100.55939609285565,
  },
];

export { tokens, crates };

export const NILLION_API_BASE = 'https://nillion-storage-apis-v0.onrender.com';
export const USER_SEED = '5dSigSu8rs3kYoJuKpSMnAaKWEmKDBofhqur7yaLH4jDDwW7mtggZcuQmPh5bXiDbfy2mcsV4VYuJZVVe9xq8Yjj';
export const DSTACK_ENDPOINT = process.env.DSTACK_SIMULATOR_ENDPOINT || 'http://localhost:8090';
export const NILLION_APP_ID = process.env.NILLION_APP_ID || '';
export const COINBASE_PRIVATE_KEY = process.env.CDP_API_KEY_PRIVATE_KEY || '';
export const COINBASE_API_KEY_NAME = process.env.CDP_API_KEY_NAME || '';
export const CDP_WALLET_SEED = process.env.CDP_WALLET_SEED || '';
export const CDP_WALLET_ID = process.env.CDP_WALLET_ID || '';

export const accessControlConditions: any[] = [
  {
    contractAddress: '',
    standardContractType: '',
    chain: 'ethereum',
    method: '',
    parameters: [':userAddress'],
    returnValueTest: {
      comparator: '=',
      value: ':userAddress',
    },
  },
];
