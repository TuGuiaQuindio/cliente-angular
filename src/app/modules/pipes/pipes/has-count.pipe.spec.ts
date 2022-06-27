import { HasCountPipe } from './has-count.pipe';

describe('HasCountPipe', () => {
  it('create an instance', () => {
    const pipe = new HasCountPipe();
    expect(pipe).toBeTruthy();
  });
});
