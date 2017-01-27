(function (){
  'use strict';

  var domain = "";
  process.argv.forEach(function (val, index, array) {
    var arg = val.split("=");
    if (arg.length > 1) {
      if (arg[0] == "--domain") {
        domain = "." + arg[1];
        console.log("Setting domain to:", domain);
      }
    }
  });

  module.exports = {
    catalogueUrl:  "http://catalogue" + domain,
    tagsUrl:       "http://catalogue" + domain + "/tags",
    cartsUrl:      "http://cart" + domain + "/carts",
    ordersUrl:     "http://orders" + domain,
    customersUrl:  "http://user" + domain + "/customers",
    addressUrl:    "http://user" + domain + "/addresses",
    cardsUrl:      "http://user" + domain + "/cards",
    loginUrl:      "http://user" + domain + "/login",
    registerUrl:   "http://user" + domain + "/register",
  };
}());
