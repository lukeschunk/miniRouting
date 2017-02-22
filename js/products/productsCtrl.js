angular.module('miniRouting')
  .controller('productsCtrl', function($scope, $stateParams, productService) {
    if($stateParams.id === 'shoes') {
      $scope.productHeader = 'Shoes';
      $scope.products = productService.shoeData;
    }

    if ($stateParams.id === 'socks') {
      $scope.productHeader = 'Socks';
      $scope.products = productService.sockData;
    }
  })
