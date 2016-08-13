var app = angular.module("ascii-warehouse", ['smart-table', 'ui.bootstrap', 'angularMoment'])
    .controller("mainCtrl", function ($scope, $http, Products) {
        $scope.loading = true;
        $scope.init = init;
        $scope.loadMoreAscii = loadMoreAscii;

        function init() {
            Products.getProducts(0)
                .then(function (products) {
                    $scope.products = products;
                    $scope.loading = false;
                });
        }
        
        function loadMoreAscii() {
            Products.getProducts(31)
                .then(function (products) {
                    products.forEach(function (prod) {
                        $scope.products.push(prod);
                    });
                });
        }

        $scope.init()

    });