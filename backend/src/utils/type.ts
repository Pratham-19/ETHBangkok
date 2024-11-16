import { Address } from 'viem';

interface Location {
  latitude: number;
  longitude: number;
}

interface User {
  id: string;
  location: Location;
  name: string;
  avatarUrl: string;
  walletAddress: Address;
}

export type { User, Location };
