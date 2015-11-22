# Kontor challenge solution

## usage
* `$ npm install`
* `$ node`
* `> var Terminal = require('./index')`
* `> var t = new Terminal()`
* `> t.setPricing({name: 'A', price: { unitPrice: 2, volume: { units: 3, price: 1 }}})`
* `> t.setPricing({name: 'B', price: { unitPrice: 2.25, volume: { units: 5, price: 1 }}})`
* `> t.scan('A')`
* `> t.scan('B')`
* `> t.total` prints $4.25

## testing
* `$ npm test`
