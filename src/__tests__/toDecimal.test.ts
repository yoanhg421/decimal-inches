import { toDecimal } from '../index';

test('returns the decimal of a number as a unicode vulgar', () => {
  expect(toDecimal('23 1/2')).toBe(23.5);
});

test('returns the decimal of a number as a fraction', () => {
  expect(toDecimal('19 2/5')).toBe(19.4);
});

test('returns the decimal of a number as a fraction', () => {
  expect(toDecimal('100')).toBe(100);
});

test('returns the decimal of a number as a fraction', () => {
  expect(toDecimal('1.5')).toBe(1.5);
});
