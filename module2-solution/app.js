(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var self = this;

  self.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  self.markAsBought = function(itemIndex) {
    ShoppingListCheckOffService.markAsBought(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var self = this;

  self.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var self = this;

  var toBuy = [
    { name: "cookies", quantity: 10 },
    { name: "milk", quantity: 2 },
    { name: "sugar", quantity: 4 },
    { name: "apples", quantity: 3 },
    { name: "bananas", quantity: 9 }
  ];

  var bought = [];

  self.markAsBought = function(itemIndex) {
    var justBoughtItem = toBuy.splice(itemIndex, 1);
    console.log(justBoughtItem[0]);
    bought.push(justBoughtItem[0]);
    console.log(bought);
  }

  self.getItemsToBuy = function() {
    return toBuy;
  }

  self.getBoughtItems = function() {
    return bought;
  }
}

})();
