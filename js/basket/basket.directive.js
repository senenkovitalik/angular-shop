angular.module('basket').
directive('basket', [() => {
  return {
    restrict: 'E',
    templateUrl: '/js/basket/basket.template.html'
  };
}]);
