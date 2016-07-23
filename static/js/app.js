var app = angular.module("ascii-warehouse", ['smart-table', 'ui.bootstrap', 'angularMoment'])
    .controller("mainCtrl", function ($scope, $http, Products) {
        Products.getAll()
            .then(function (products) {
                moment.locale('es');
                $scope.products = products;
            })
    });