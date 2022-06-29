import { NotZeroPipe } from './not-zero.pipe';

describe('NotZeroPipe', () => {
  it('create an instance', () => {
    const pipe = new NotZeroPipe();
    expect(pipe).toBeTruthy();
  });
});
