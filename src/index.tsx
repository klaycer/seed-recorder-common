import * as constant from './common/constants';
import { DB } from './common/models/stake';
import { useLiveQuery } from 'dexie-react-hooks';

export const Constant = constant;
export const StakeDB = DB;
export const fetchQuery = useLiveQuery;
