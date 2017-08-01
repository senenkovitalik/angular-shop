angular.module('productItem')
.directive('productItem', function() {
  return {
    restrict: 'E',
    scope: {
      x: '=product',
      list: '='
    },
    templateUrl: '/js/product-item/product-item.template.html'
  }
});