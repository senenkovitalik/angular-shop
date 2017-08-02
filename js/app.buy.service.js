angular.
module("myShoppingList").
  factory('buy', function() {
    const products = [];

    function addProduct(product) {
      products.push(product);
    }

    function removeProduct(product) {
      const index = products.indexOf(product);
      if (index > -1) {
        products.splice(index, 1);
      }
    }

    function getProducts() {
      return products;
    }

    return {
      addToBasket: addProduct,
      removeProduct: removeProduct,
      getProducts: getProducts
    }
});