import { Address } from 'viem';

export interface Location {
  latitude: number;
  longitude: number;
}

export interface User {
  id: string;
  location: Location;
  name: string;
  avatarUrl: string;
  walletAddress: Address;
}

export interface EncryptedData {
  ciphertext: string;
  dataToEncryptHash: string;
}

export interface StorageResult {
  store_id: string;
  secret_name: string;
}

export interface NillionSecret {
  nillion_seed: string;
  secret_value: any;
  secret_name: string;
}

export interface NillionPermissions {
  retrieve: string[];
  update: string[];
  delete: string[];
  compute: Record<string, any>;
}
