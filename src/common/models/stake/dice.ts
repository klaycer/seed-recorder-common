import { StakeDefault, StakeDefaultState, StakeDefaultUser } from "./default";

export interface StakeDiceState extends StakeDefaultState {
  condition: string;
  result: number;
  target: number;
}

export interface StakeDiceUser extends StakeDefaultUser {}

export interface StakeDiceBet extends StakeDefault {
  state: StakeDiceState;
  user: StakeDiceUser;
}
