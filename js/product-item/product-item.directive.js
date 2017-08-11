angular.module('productItem')
.directive('productItem', [() => {
  return {
    restrict: 'E',
    templateUrl: '/js/product-item/product-item.template.html'
  };
}]);