angular.module('myShoppingList')
.controller('pageCtrl', ['$scope', function($scope){
  $scope.list = false;
  this.changeViewMode = function(view) {
    switch (view) {
    case 'table':
      $scope.list = false;
      break;
    case 'list':
      $scope.list = true;
      break;
    }
  }
}]);