import Dexie, { Table } from 'dexie';
import {
  DBNAME,
  STAKE_RECORD_LIMBO_BET,
  STAKE_RECORD_CRASH_BET,
  STAKE_RECORD_DICE_BET,
  STAKE_RECORD_CRASH_RESULT,
  STAKE_RECORD_ROULETTE_BET,
  STAKE_RECORD_MINES_BET,
  STAKE_RECORD_MINES_NEXT,
} from '../../constants';
import { StakeDiceBet } from './dice';
import { StakeLimboBet } from './limbo';
import { StakeCrashBet, StakeCrashResult } from './crash';
import { StakeMinesBet, StakeMinesNext } from './mines';
import { StakeRouletteBet } from './roulette';
import { StakeDefault } from './default';

interface SetStakeDataEvent {
  type: string;
  result: any;
}

export class StakeDB extends Dexie {
  stakeDiceBet!: Table<StakeDiceBet, number>;
  stakeLimboBet!: Table<StakeLimboBet, number>;
  stakeRouletteBet!: Table<StakeRouletteBet, number>;
  stakeMinesBet!: Table<StakeMinesBet, number>;
  stakeMinesNext!: Table<StakeMinesNext, number>;

  stakeCrashResult!: Table<StakeCrashResult, number>;
  stakeCrashBet!: Table<StakeCrashBet, number>;

  constructor() {
    super(DBNAME);

    const defaultModelDefinition =
      '++id, active, amount, currency, amountMultiplier, game, payout, payoutMultiplier, state, updatedAt, user, createdAt';

    this.version(1).stores({
      stakeDiceBet: defaultModelDefinition,
      stakeLimboBet: defaultModelDefinition,
      stakeRouletteBet: defaultModelDefinition,
      stakeMinesBet: defaultModelDefinition,
      stakeMinesNext: defaultModelDefinition,
      stakeCrashResult:
        '++id, crashpoint, hash, leaderboard, multiplier, nextRoundIn, seed, startTime, status, createdAt',
      stakeCrashBet:
        '++id, btcAmount, amount, cashoutAt, gameId, currency, payout, payoutMultiplier, result, updatedAt, user, createdAt',
    });
  }

  setSeedData = (event_data: SetStakeDataEvent) => {
    switch (event_data.type) {
      case STAKE_RECORD_DICE_BET:
        this.addResponseByModel(this.stakeDiceBet, event_data.result);
        break;
      case STAKE_RECORD_LIMBO_BET:
        this.addResponseByModel(this.stakeLimboBet, event_data.result);
        break;
      case STAKE_RECORD_ROULETTE_BET:
        this.addResponseByModel(this.stakeRouletteBet, event_data.result);
        break;
      case STAKE_RECORD_MINES_BET:
        this.addResponseByModel(this.stakeMinesBet, event_data.result);
        break;
      case STAKE_RECORD_MINES_NEXT:
        this.addResponseByModel(this.stakeMinesNext, event_data.result);
        break;
      case STAKE_RECORD_CRASH_RESULT:
        this.addCrashResult(event_data.result);
        break;
      case STAKE_RECORD_CRASH_BET:
        this.addCrashBet(event_data.result);
        break;
      default:
        break;
    }
  };

  addResponseByModel = async (
    model: Table<StakeDefault, number>,
    result: StakeDefault
  ) => {
    return await model
      .add({
        id: result.id,
        active: result.active,
        amount: result.amount,
        currency: result.currency,
        amountMultiplier: result.amountMultiplier,
        game: result.game,
        payout: result.payout,
        payoutMultiplier: result.payoutMultiplier,
        state: result.state,
        updatedAt: result.updatedAt,
        user: result.user,
        createdAt: Date.now(),
      })
      .then(res => res);
  };

  addCrashResult = async (result: StakeCrashResult) => {
    if (result.status === 'ended') {
      return await this.stakeCrashResult
        .add({
          id: result.id,
          crashpoint: result.crashpoint,
          hash: result.hash,
          leaderboard: result.leaderboard,
          multiplier: result.multiplier,
          nextRoundIn: result.nextRoundIn,
          seed: result.seed,
          startTime: result.startTime,
          status: result.status,
          createdAt: Date.now(),
        })
        .then(res => res);
    }
    return false;
  };

  addCrashBet = async (result: StakeCrashBet) => {
    return await this.stakeCrashBet
      .add({
        id: result.id,
        btcAmount: result.btcAmount,
        amount: result.amount,
        cashoutAt: result.cashoutAt,
        gameId: result.gameId,
        currency: result.currency,
        payout: result.payout,
        payoutMultiplier: result.payoutMultiplier,
        result: result.result,
        updatedAt: result.updatedAt,
        user: result.user,
        createdAt: Date.now(),
      })
      .then(res => res);
  };
}