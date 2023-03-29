import { ToWords } from 'to-words';

export const formatCurrency = (value) => {
  const formatter = Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
};

export const currencyToWords = (value) => {
  const toWords = new ToWords();
  return toWords.convert(value, { currency: true });
};
