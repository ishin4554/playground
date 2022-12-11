const discount = (inputValue, quantity) => {
  // 如果買超過 100 個，少一塊，如果買價格超過 50 少 2 塊
  if (inputValue > 50) inputValue = inputValue - 2;
  if (quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}
export default discount;
