import { StakeDefaultState, StakeDefaultUser, StakeDefault } from './default';

export interface StakeLimboState extends StakeDefaultState {
  multiplierTarget: number;
  result: number;
}

export interface StakeLimboUser extends StakeDefaultUser {}

export interface StakeLimboBet extends StakeDefault {
  state: StakeLimboState;
  user: StakeLimboUser;
}
