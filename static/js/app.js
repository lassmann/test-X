var app = angular.module("ascii-warehouse", ['smart-table', 'ui.bootstrap'])
    .controller("mainCtrl", function ($scope, $http, Products) {
        Products.getAll()
            .then(function (products) {
                $scope.products = products;
            })
    });