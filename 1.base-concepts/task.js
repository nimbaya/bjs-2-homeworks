"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d, x1, x2;
  d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  } else {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = (percent / 100) / 12;
  let principal = amount - contribution;
  let monthPayment = principal * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
  let totalPayment = monthPayment * countMonths;
  return parseFloat(totalPayment.toFixed(2));
}
