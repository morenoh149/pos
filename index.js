/*
 * Terminal constructor
 * returns a terminal object
 */
var terminal = function() {
  var total = 0
  var pricing = [{
    name: 'productName',
    price: {
      unitPrice: 2.25,
      volume: { units: 3, price: 5.0 }
    },
    quantity: 0 // used internally
  }]

  /*
   * Adds new pricing scheme to our pricing list
   * expects an object of the form:
   * { name: string,
   *   price: { unitPrice: float, volume: { units: float, price: float }}}
   * names must be unique
   */
   var setPricing = function(obj) {
     if (obj.name && obj.price &&
         obj.price.unitPrice && obj.price.volume &&
         obj.price.volume.units && obj.price.volume.price) {
       if (!this.pricing.some(function(p) { return p.name === obj.name })) {
         if (!obj.quantity) {
           obj.quantity = 0
         }
         this.pricing.push(obj)
       } else {
         throw 'A product with that name already exists.'
       }
     } else {
       throw 'Invalid price.'
     }
   }

   /*
    * Adds item to cart,
    * updates cart total
    */
   var scan = function(productName) {
     pricing.forEach(function(p) {
       if (p.name === productName) {
         p.quantity += 1
         total = sum()
         console.log('Cart total: $%d', total)
       }
     }, this)
   }

   /*
    * Private function, used internally to calculate cart total
    */
   var sum = function() {
     var sum = 0
     pricing.forEach(function(p) {
       var whole = Math.floor(p.quantity/p.price.volume.units)
       var remainder = p.quantity - (whole * p.price.volume.units)
       var cost = (whole * p.price.volume.price) + (remainder * p.price.unitPrice)
       console.log(p, whole, remainder, cost)
       sum += cost
     })
     return sum
   }

   return {
     total: total,
     pricing: pricing,
     setPricing: setPricing,
     scan: scan
   }
}

exports.terminal = terminal
