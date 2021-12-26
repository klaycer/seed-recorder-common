export interface StakeCrashHash {
  hash: string;
  number: number;
  __typename: string;
}

export interface StakeCrashUser {
  id: string;
  name: string;
}

export interface StakeCrashActiveBet {
  amount: number;
  btcAmount: number;
  cashoutAt: number;
  currency: string;
  gameId: string;
  id: string;
  payout: number;
  payoutMultiplier: number;
  result: string;
  updatedAt: string;
  user?: StakeCrashUser;
}

export interface StakeCrashBetUser extends StakeCrashUser {
  activeCrashBet: StakeCrashActiveBet
}

export interface StakeCrashLeaderboard {
  amount: number;
  btcAmount: number;
  cashoutAt: number;
  currency: string;
  gameId: string;
  id: string;
  payout: number;
  payoutMultiplier: number;
  result: string;
  updatedAt: string;
  user?: StakeCrashUser;
  __typename: string;
}

export interface StakeCrashSeed {
  id: string;
  seed: string;
  __typename: string;
}

export interface StakeCrashResult {
  id: string;
  crashpoint: number;
  hash: StakeCrashHash;
  leaderboard: Array<StakeCrashLeaderboard>;
  multiplier?: number;
  nextRoundIn?: number;
  seed: StakeCrashSeed;
  startTime: string;
  status: string;
  createdAt: number;
}

export interface StakeCrashBet {
  id: string;
  btcAmount: number;
  amount: number;
  cashoutAt: number;
  gameId: string;
  currency: string;
  payout: number;
  payoutMultiplier: number;
  result: string;
  updatedAt: string;
  user: StakeCrashBetUser;
  createdAt: number;
}