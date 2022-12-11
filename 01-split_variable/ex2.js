const discount = (originalValue, quantity) => {
  let inputValue = originalValue;
  if (inputValue > 50) inputValue = inputValue - 2;
  if (quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}
export default discount;
