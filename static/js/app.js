angular.module("ascii-warehouse", ['smart-table'])
    .controller("mainCtrl", function($scope, $http) {
        $http({
            headers: {"Accept":"application/json"},
            method: 'GET',
            url: '/api/products?limit=15',
            transformResponse: function Transformer(raw) {
                var self = this;
                self.result = [];
                self.isEmptyString = function (str) {
                    return (!str || 0 === str.length);
                };
                self.items = raw.split('\n');
                angular.forEach(self.items, function Iterator (item) {
                    if (!self.isEmptyString(item)) {
                        var objectItem = JSON.parse(item);
                        self.result.push(objectItem);
                    }
                });
                return self.result;
            }
        }).then(function successCallback(response) {
            $scope.products = response.data;
        }, function errorCallback(err) {
            console.log(err.message);
        });
    });