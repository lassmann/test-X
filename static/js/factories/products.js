app.factory('Products', function ($http, $q) {
    function getProducts(from, quantity) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/api/products?limit=' + quantity + '&skip=' + from,
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
        }).then(function successCallback(products) {
            deferred.resolve(products.data);
        }, function errorCallback(err) {
            deferred.reject(err.message);
        });
        return deferred.promise;
    }

    return {
        getProducts: getProducts,
    };
});