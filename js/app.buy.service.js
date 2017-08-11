angular.module('myShoppingList')
.factory('buy', () => {
  const arr = [];

  function addProduct(prod) {
    if (!arr.indexOf(prod) > -1) {
      arr.push(prod);
      console.log("BuyService: Product has been added: ", prod);
    }
  }

  function removeProduct(prod) {
    const index = arr.indexOf(prod);
    if (index > -1) {
      arr.splice(index, 1);
      console.log("BuyService: Product has been removed: ", prod);
    }
  }

  function hasProduct(prod) {
    return (arr.indexOf(prod) > -1);
  }

  function getProducts() {
    return arr;
  }

  return {
    addProduct: addProduct,
    removeProduct: removeProduct,
    hasProduct: hasProduct,
    getProducts: getProducts
  }
})