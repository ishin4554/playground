class Order {
  constructor(quantity, itemPrice) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  get discountLevel() {
    return (this.quantity > 100) ? 2 : 1;
  }

  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;
    return this.discountedPrice(basePrice);
  }

  discountedPrice(basePrice) {
    switch (this.discountLevel) {
      case 1 :
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
    }
  }
}

export default Order;
