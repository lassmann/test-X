var app = angular.module("ascii-warehouse", ['smart-table', 'ui.bootstrap'])
    .controller("mainCtrl", function($scope, $http, Products) {
        Products.then(function (response){
            $scope.products = response.data
        });
    });