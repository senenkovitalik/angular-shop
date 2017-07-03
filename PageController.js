app.controller('pageCtrl', function($scope){
  $scope.list = true;
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
});