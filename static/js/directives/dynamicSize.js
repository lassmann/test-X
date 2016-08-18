app.directive('dynamicSize',function ($window){
    return {
        restrict: 'A',
        scope:{
            dynamicSize:'@'
        },
        link: function (scope, elem, attrs){
            elem.css('font-size', scope.dynamicSize + "px" );
        }
    }
});