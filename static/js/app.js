var app = angular.module("ascii-warehouse", ['smart-table', 'ui.bootstrap', 'angularMoment'])
    .controller("mainCtrl", function ($scope, $http, Products) {
        $scope.loading = true;
        Products.getAll(31)
            .then(function (products) {
                $scope.products = products;
                $scope.loading = false;
            });

        $scope.loadMoreAscii = function (){
            Products.getAll(31)
                .then(function (products) {
                    console.log("bien entre", products);
                    $scope.products.push(products);
                    console.log($scope.products);
                    // $scope.loading = false;
                    // $scope.products = products;
                });

            //console.log("entre bien por la funcion" );
        }

    });