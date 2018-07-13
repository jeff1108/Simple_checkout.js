
describe('Checkout', () => {

  var checkout


  beforeEach(function () {
    checkout = new Checkout ()
  });

  describe('.price', () => {
    it('can see item price', () => {
      expect(checkout.price('pizza')).toEqual(2);
    });
  });

  describe('.buy', () => {
    it('no products by default', function() {
      expect(checkout.baskets()).toEqual([]);
    });

    it('can scan all items and price into checkout baskets', () => {
      checkout.buy('pizza')
      expect(checkout.baskets()).toEqual([{item: 'pizza', item_price: 2}]);
    });
  });

  describe('.total_price', () => {
    it('can see the total price', () => {
      checkout.buy('pizza')
      checkout.buy('apple')
      expect(checkout.total_price()).toEqual('£7.00')
    });
  });
});
