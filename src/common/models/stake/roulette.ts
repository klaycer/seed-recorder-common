import { StakeDefaultState, StakeDefaultUser, StakeDefault } from './default';

export interface StakeRouletteStateParity {
  amount: number;
  value: string;
}

export interface StakeRouletteState extends StakeDefaultState {
  colors: Array<any>;
  numbers: Array<any>;
  parities: Array<StakeRouletteStateParity>;
  ranges: Array<any>;
  result: number;
  rows: Array<any>;
}

export interface StakeRouletteUser extends StakeDefaultUser {}

export interface StakeRouletteBet extends StakeDefault {
  state: StakeRouletteState;
  user: StakeRouletteUser;
}
