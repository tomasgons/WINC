const calculateDiscountedPrice = function(totalAmount, discount) {
  return Math.round(totalAmount - discount);
};
const calculateDiscountedPriceClone = function(totalAmount, discount) {
  if (totalAmount > 25) {
    return Math.round(totalAmount - discount);
  } else {
    return totalAmount;
  }
};
console.log(calculateDiscountedPriceClone(50, 7.5));
console.log(calculateDiscountedPriceClone(20, 2.5));
