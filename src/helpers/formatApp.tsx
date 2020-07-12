import React from 'react';

export const formatNumber = (num: number) => {
    return new Intl.NumberFormat("ES-CO", {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(num);
};

export const formatNumberRed = (num: number) => {
  return (
    <span style={{ color: "red" }}>
      {new Intl.NumberFormat("ES-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(num)}
    </span>
  );
}