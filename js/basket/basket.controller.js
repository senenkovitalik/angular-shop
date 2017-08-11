angular.module('myShoppingList')
.controller('basketController', ['$scope', 'promo', 'buy', ($scope, promo, buy) => {
  $scope.products = buy.getProducts();

  $scope.count = () => {
    const l = $scope.products.length;
    return (promo.getPromo()) ? l * 2 : l;
  };

  $scope.remove = (product) => {
    buy.removeProduct(product);
  };
}]);