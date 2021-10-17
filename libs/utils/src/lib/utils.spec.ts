import { humanReadableTimeFromSeconds } from './utils';

describe('humanReadableTimeFromSeconds', () => {
  it('should work', () => {
    expect(humanReadableTimeFromSeconds(0)).toEqual('0s');
  });
  it('59s', () => {
    expect(humanReadableTimeFromSeconds(59)).toEqual('59s');
  });
  it('1m', () => {
    expect(humanReadableTimeFromSeconds(60)).toEqual('1m');
  });
  it('10m', () => {
    expect(humanReadableTimeFromSeconds(600)).toEqual('10m');
  });
});
