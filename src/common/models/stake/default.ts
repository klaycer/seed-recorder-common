export interface StakeDefaultState {}
  
export interface StakeDefaultUser {
    id: string;
    name: string;
}

export interface StakeDefault {
    id: string;
    active: boolean;
    amount: number;
    currency: string;
    amountMultiplier: number;
    game: string;
    payout: number;
    payoutMultiplier: number;
    state: StakeDefaultState;
    updatedAt: string;
    user: StakeDefaultUser;
    createdAt: number;
}