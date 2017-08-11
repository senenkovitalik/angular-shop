angular.module('myShoppingList')
.directive('myPopover', ['$compile', '$timeout', 'buy', ($compile, $timeout, buy) => {
  return {
    restrict: 'A',
    link: (scope, element) => {
      const container = angular.element('<div />');
      // const template = '<div class=\'popover\'><div class=\'popover-content\'></div></div>';
      const content = 'Are you sure?<br><button class=\'btn btn-primary buy popover-hide\' ng-disabled=\'inBasket(x)\' ng-click=\'buy(x)\'>OK</button><button class=\'btn btn-default popover-hide\'>Cancel</button>';

      $(container).append(content);
      $compile(container)(scope);

      const elem = $(element);

      $timeout(() => {
        elem.popover({html: true, /*template: template,*/ content: container, placement: 'auto', trigger: 'manual'});
      });

      elem.on('click', (e) => {
        elem.popover('toggle');
      });

      elem.on('shown.bs.popover', () => {
        $('.popover-hide').on('click', (e) => {
          elem.popover('hide');
        });
      });

      scope.inBasket = (product) => {
        return buy.hasProduct(product);
      };
    }
  }
}]);