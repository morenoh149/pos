# Kontor challenge solution

## usage
* `$ npm install`
* `$ node`
* `> var terminal = require('./index').terminal()`
* `> terminal.setPricing({name: 'A', price: { unitPrice: 2, volume: { units: 3, price: 1 }}})`
* `> terminal.setPricing({name: 'B', price: { unitPrice: 2.25, volume: { units: 5, price: 1 }}})`
* `> terminal.scan('A')`
* `> terminal.scan('B')`
* `> terminal.total` prints $4.25

## testing
* `$ npm test`
