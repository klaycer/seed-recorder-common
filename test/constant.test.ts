import { DBNAME } from '../src';

describe('constant', () => {
  it('DB Name defined', () => {
    expect(DBNAME).toEqual('SeedRecorder');
  });
});
