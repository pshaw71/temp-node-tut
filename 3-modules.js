// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHis = require('./5-utils')
const { peter, john } = require('./4-names')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
 console.log(data)

sayHis('susan')
sayHis(names.john)
sayHis(names.peter)
sayHis(john)
sayHis(peter)