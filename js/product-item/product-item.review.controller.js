angular.module('myShoppingList')
.controller("ReviewController", function() {
  this.product = {
    weight: null,
    country: null,
    angles: "1",
    tech: null,
    pretty: false,
    gender: "Male",
    colors: null
  };

  this.colors = ["Red", "Green", "Blue", "Yellow"];
  this.color = this.colors[0];
  this.arr = [];

  this.addColor = function(color, e) {
    e.preventDefault();
    if (this.arr.indexOf(color) === -1)  {
      this.arr.push(color);
      this.product.colors = this.arr.join(", ");
    }
  };

  this.submitForm = function() {
    console.log('Product for review: ', this.product);
  }
});