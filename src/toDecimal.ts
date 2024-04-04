import numberLookupMap from './helpers/numberLookupMap';

// function that takes a unicode vulgar or a fraction and returns a decimal
const toDecimal = (inchFraction: string): number => {
  const parts = inchFraction.split(' ');
  let whole = 0;
  let frac = '';

  if (parts.length === 2) {
    whole = parseInt(parts[0]);
    frac = parts[1];
  } else if (parts.length === 1) {
    frac = parts[0];
  }

  let fracValue;
  if (frac.includes('/')) {
    const [numerator, denominator] = frac.split('/');
    fracValue = parseInt(numerator) / parseInt(denominator);
  } else {
    fracValue = parseFloat(frac);
  }

  return whole + fracValue;
};

export default toDecimal;
