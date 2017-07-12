app.controller('productsCtrl', function($scope){
  const images = chance.shuffle([
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg"
  ]);
  $scope.products = [];
  for (let i = 0; i <= 5; i++) {
    const item = {
      name: chance.word({syllables: 3}),
      price: chance.floating({min: 0, max: 500, fixed: 2}),
      image: images[i],
      description: chance.paragraph({sentences: 3}), 
      isAvailable: chance.bool({likelihood: 75}),
      desc: chance.sentence({words: 25}),
      spec: chance.sentence({words: 25})
    };
    $scope.products.push(item);
  }

  $scope.orderValue = 'name';
  $scope.reverse = false;
  $scope.orderByMe = function(x) {
    $scope.orderValue = x;
    $scope.reverse = !$scope.reverse;
  }

  $scope.nameArrow = "&uarr;";
  $scope.priceArrow = "&uarr;";
  $scope.toggleArrow = function(arg) {
    switch (arg) {
      case 'name':
        $scope.nameArrow = ($scope.nameArrow === "&uarr;") ? "&darr;" : "&uarr;";
        break;
      case 'price':
        $scope.priceArrow = ($scope.priceArrow === "&uarr;") ? "&darr;" : "&uarr;";
        break;
    }
  }
});