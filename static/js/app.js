var app = angular.module("ascii-warehouse", ['smart-table', 'ui.bootstrap', 'angularMoment'])
    .controller("mainCtrl", function ($scope, $http, Products) {
        $scope.loading = true;
        Products.getAll(0)
            .then(function (products) {
                $scope.products = products;
                $scope.loading = false;
            });

        $scope.loadMoreAscii = function (){
            Products.getAll(31)
                .then(function (products) {
                    products.forEach(function (prod){
                        $scope.products.push(prod);
                    });
                });
        }

    });