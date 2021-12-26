import { StakeDefault, StakeDefaultState, StakeDefaultUser } from "./default";

export interface StakeMinesStateRound {
    field: string;
    payoutMultiplier: string;
}

export interface StakeMinesState extends StakeDefaultState {
    minesCount: number;
    rounds: Array<StakeMinesStateRound>
    mines?: Array<number>;
}

export interface StakeMinesUser extends StakeDefaultUser {}

export interface StakeMines extends StakeDefault {
    state: StakeMinesState;
    user: StakeMinesUser;
}

export interface StakeMinesBet extends StakeMines {}
export interface StakeMinesNext extends StakeMines {}