angular.module('basket')
.directive('basket', ['buy', function() {
  return {
    restrict: 'E',
    scope: {},
    controller: function($scope, buy) {
      $scope.products = buy.getProducts();
      $scope.remove = function(product) {
        buy.removeProduct(product);
      }
    },
    templateUrl: '/js/basket/basket.template.html'
  }
}]);
