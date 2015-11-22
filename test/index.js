var assert = require('assert')
var Terminal = require('../index')

describe('Terminal', function() {
  describe('should print correct total', function () {
    var terminal;
    beforeEach(function() {
      terminal = new Terminal()
      terminal.setPricing({name: 'A', price: { unitPrice: 2, volume: { units: 4, price: 7 }}})
      terminal.setPricing({name: 'B', price: { unitPrice: 12 }})
      terminal.setPricing({name: 'C', price: { unitPrice: 1.25, volume: { units: 6, price: 6 }}})
      terminal.setPricing({name: 'D', price: { unitPrice: .15 }})
    })
    it('ABCDABAA = $32.40', function () {
      terminal.scan('A')
      terminal.scan('B')
      terminal.scan('C')
      terminal.scan('D')
      terminal.scan('A')
      terminal.scan('B')
      terminal.scan('A')
      terminal.scan('A')
      assert.equal(terminal.total, 32.40);
    });
    it('CCCCCCC = $7.25', function () {
      terminal.scan('C')
      terminal.scan('C')
      terminal.scan('C')
      terminal.scan('C')
      terminal.scan('C')
      terminal.scan('C')
      terminal.scan('C')
      assert.equal(terminal.total, 7.25);
    });
    it('ABCD = $15.40', function () {
      terminal.scan('A')
      terminal.scan('B')
      terminal.scan('C')
      terminal.scan('D')
      assert.equal(terminal.total, 15.40);
    });
  });
});
