app.factory('Products', function ($http, $q) {
    return $q(function (resolve, reject) {
        $http({
            method: 'GET',
            url: '/api/products?limit=15',
            transformResponse: function Transformer(raw) {
                var self = this;
                self.result = [];
                self.isEmptyString = function (str) {
                    return (!str || 0 === str.length);
                };
                self.items = raw.split('\n');
                angular.forEach(self.items, function Iterator(item) {
                    if (!self.isEmptyString(item)) {
                        var objectItem = JSON.parse(item);
                        self.result.push(objectItem);
                    }
                });
                return self.result;
            }
        }).then(function successCallback(response) {
            resolve(response);
        }, function errorCallback(err) {
            reject(err.message)
        });
    });
});