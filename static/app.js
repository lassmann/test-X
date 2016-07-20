var app = angular.module("ascii-warehouse", []);
app.controller("mainCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
});