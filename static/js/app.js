var app = angular.module("ascii-warehouse", ['smart-table', 'ui.bootstrap', 'angularMoment'])
    .controller("mainCtrl", function ($scope, $http, Products) {
        $scope.loading = true;
        Products.getProducts(0)
            .then(function (products) {
                $scope.products = products;
                $scope.loading = false;
            });

        $scope.loadMoreAscii = function () {
            Products.getProducts(31)
                .then(function (products) {
                    products.forEach(function (prod) {
                        $scope.products.push(prod);
                    });
                });
        }

    });