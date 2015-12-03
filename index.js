/*
 * Terminal constructor
 * returns a terminal object
 */
function Terminal() {
  this.total = 0
  this._pricing = [{
    name: 'productName',
    price: {
      unitPrice: 2.25,
      volume: { units: 3, price: 5.0 }
    },
    quantity: 0 // used internally
  }]
}

/*
 * Private function, used internally to calculate cart total
 */
Terminal.prototype._sum = function() {
  var result = 0
  this._pricing.forEach(function(p) {
    if (p.price.volume) {
      var whole = Math.floor(p.quantity/p.price.volume.units)
      var remainder = p.quantity - (whole * p.price.volume.units)
      var cost = (whole * p.price.volume.price) + (remainder * p.price.unitPrice)
    } else {
      var cost = p.price.unitPrice * p.quantity
    }
    result += cost
  })
  return result
}

/*
 * Adds new pricing scheme to our pricing list
 * expects an object of the form:
 * { name: string,
 *   price: { unitPrice: float, volume: { units: float, price: float }}}
 * names must be unique
 */
Terminal.prototype.setPricing = function(obj) {
  if (obj.name && obj.price && obj.price.unitPrice) {
    if (!this._pricing.some(function(p) { return p.name === obj.name })) {
      if (!obj.quantity) {
        obj.quantity = 0
      }
      this._pricing.push(obj)
    } else {
      throw 'A product with that name already exists.'
    }
  } else  {
    throw 'Invalid price.'
  }
}

/*
 * Adds item to cart,
 * updates cart total
 */
Terminal.prototype.scan = function(productName) {
  this._pricing.forEach(function(p) {
    if (p.name === productName) {
      p.quantity += 1
      this.total = this._sum()
    }
  }, this)
}

module.exports = Terminal
