import React from 'react';

function CurrencyFormatter({ value, currencycode }) {
    console.log(currencycode);
  const formattedValue = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencycode,
  }).format(value);
console.log(formattedValue);
  return <span>{formattedValue}</span>;
}

export default CurrencyFormatter;