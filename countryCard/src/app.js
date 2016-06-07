//require('./css/app.css')

const angular       = require("angular")
const myCard        = require('./directives/myCard.js')
const countriesCtrl = require('./controllers/countriesCtrl.js')
const getCountries  = require('./services/getCountries.js')

angular.module("countryCard", [])

angular.module("countryCard")
    .controller(countriesCtrl)
    .factory(getCountries)
    .directive(myCard)
