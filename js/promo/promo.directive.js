angular.module('promo')
.directive('promo', [() => {
 return {
   restrict: 'E',
   templateUrl: '/js/promo/promo.template.html'
 };
}]);