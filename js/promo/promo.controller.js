angular.module('myShoppingList')
.controller('promoController', ['$scope', 'promo', ($scope, promo) => {
  $scope.usePromo = () => {
    if ($scope.promo === '1234') {
      console.log('We need to double products count');
      promo.usePromo();
    }
  };
}]);