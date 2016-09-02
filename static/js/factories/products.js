app.factory('Products', function ($http) {
    function getProducts(from, quantity) {
        return $http({
            method: 'GET',
            url: '/api/products?limit=' + quantity + '&skip=' + from,
            transformResponse: function Transformer(raw) {
                var self = this;
                self.result = [];
                self.isEmptyString = function (str) {
                    return (!str || 0 === str.length);
                };
                self.items = raw.split('\n');
                return self.items
                    .map(function (item){
                        return self.isEmptyString(item)? null : JSON.parse(item);
                    })
                    .filter(function (item){
                        return item;
                    })
            }
        }).then(function(res) {return res.data})
    }

    return {
        getProducts: getProducts
    };
});