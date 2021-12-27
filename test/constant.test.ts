import { Constant } from '../src';

describe('constant', () => {
  it('DB Name defined', () => {
    expect(Constant.DBNAME).toEqual('SeedRecorder');
  });
});
