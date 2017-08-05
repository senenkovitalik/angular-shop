angular.module('productItem')
.directive('productItem', ['buy', function() {
  return {
    restrict: 'E',
    scope: {
      x: '=product',
      list: '='
    },
    controller: function($scope, buy) {

      $scope.value = 'Buy';

      $scope.checkBasket = function() {
        if (!$scope.x.isAvailable) {
          return true;
        } else {
          if (buy.getProducts().indexOf($scope.x) > -1) {
            $scope.value = 'In basket';
            return true;
          } else {
            $scope.value = 'Buy';
            return false;
          }
        }
      };

      $scope.buy = function() {
        buy.addToBasket($scope.x);
      };
    },
    templateUrl: '/js/product-item/product-item.template.html'
  }
}]);