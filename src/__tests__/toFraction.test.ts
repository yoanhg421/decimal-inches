import toFraction from '../toFraction';

//  a test that returns the fraction of a number as a unicode vulgar or a fraction

test('returns the fraction of a number as a unicode vulgar', () => {
  expect(toFraction(0.5)).toBe('1/2');
});

test('returns the fraction of a number as a fraction', () => {
  expect(toFraction(19.4)).toBe('19 13/32');
});

test('returns the fraction of a number as a unicode vulgar', () => {
  expect(toFraction(1.5)).toBe('1 1/2');
});

test('returns the fraction of a number as a fraction', () => {
  expect(toFraction(1.5)).toBe('1 1/2');
});
