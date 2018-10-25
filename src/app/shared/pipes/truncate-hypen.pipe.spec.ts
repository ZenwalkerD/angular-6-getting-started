import { TruncateHypenPipe } from './truncate-hypen.pipe';

describe('TruncateHypenPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateHypenPipe();
    expect(pipe).toBeTruthy();
  });
});
