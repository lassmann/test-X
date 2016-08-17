app.directive('dynamicSize',function ($window){
    return {
        restrict: 'A',
        scope:{
            dynamicSize:'@'
        },
        link: function (scope, elem, attrs){
            console.log("entro",typeof parseInt(scope.dynamicSize ));
            elem.css('font-size',scope.dynamicSize + 'px');
        }
    }
});