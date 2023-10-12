import React from 'react';

function CurrencyFormatter({ value, currencycode }) {
  const formattedValue = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencycode,
  }).format(value);
  return <span>{formattedValue}</span>;
}

export default CurrencyFormatter;