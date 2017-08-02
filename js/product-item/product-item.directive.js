angular.module('productItem')
.directive('productItem', ['buy', function() {
  return {
    restrict: 'E',
    scope: {
      x: '=product',
      list: '='
    },
    controller: function($scope, buy) {
      $scope.buy = function(product, event) {
        buy.addToBasket(product);
        const elem = event.target;
        elem.innerHTML = 'In the basket<span class="glyphicon glyphicon-shopping-cart"></span>';
        elem.disabled = true; // need to fix this !!!
      }
    },
    templateUrl: '/js/product-item/product-item.template.html'
  }
}]);