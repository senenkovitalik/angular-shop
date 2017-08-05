angular.module('basket')
.directive('basket', ['buy', function() {
  return {
    restrict: 'E',
    scope: {},
    controller: function($scope, buy) {
      $scope.products = buy.getProducts();

      $scope.remove = function(product) {
        buy.removeProduct(product);
      };

      $scope.usePromo = function(e) {
        if ($scope.promo === '1234') {
          angular.forEach($scope.products, function(val, i) {
            val.amount *= 2;
          });
          e.target.disabled = true;
        }
      };

      $scope.toOrder = function() {
        console.log($scope.products);
      };
    },
    templateUrl: '/js/basket/basket.template.html'
  }
}]);
