app.directive('dynamicSize',function ($window){
    return {
        restrict: 'A',
        scope:{
            dynamicSize:'@'
        },
        link: function (scope, elem, attrs){
            console.log("font-size" +scope.dynamicSize + "px");
            elem.css('font-size', scope.dynamicSize + "px" );
        }
    }
});