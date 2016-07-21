angular.module("ascii-warehouse", [])
    .controller("mainCtrl", function($scope, $http) {
        $http({
            headers: {"Accept":"application/json"},
            method: 'GET',
            url: '/api/products',
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
            $scope.data = response.data;
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            console.log(response);
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    });