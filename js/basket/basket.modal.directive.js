angular.module('myShoppingList')
.directive('basketModal', [() => {
  return {
    restrict: 'A',
    link: (scope, element) => {
      element.on('click', () => {
        $('#myModal').modal();
      });
    }
  };
}]);