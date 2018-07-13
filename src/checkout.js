function Checkout() {
  this.products = {'pizza': 2, 'apple': 5, 'chocolate': 3 };
  this.checkout_baskets = [];
  this.baskets_value = 0;
}

Checkout.prototype.price = function (item) {
  return this.products[item]
}

Checkout.prototype.baskets = function () {
  return this.checkout_baskets
}

Checkout.prototype.buy = function (item) {
  this.checkout_baskets.push(item)
}

Checkout.prototype.total_price = function () {
  for(var i in this.checkout_baskets) {
    this.baskets_value += this.products[this.checkout_baskets[i]]
  }
  return "£" + this.baskets_value + ".00";
}
