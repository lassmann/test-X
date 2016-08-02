var app = angular.module("ascii-warehouse", ['smart-table', 'ui.bootstrap', 'angularMoment'])
    .controller("mainCtrl", function ($scope, $http, Products) {
        $scope.loading = true;
        Products.getAll()
            .then(function (products) {
                $scope.loading = false;
                $scope.products = products;
            })
    });