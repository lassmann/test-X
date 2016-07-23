app.filter('date',function (){
    return function (input){
        moment.locale('es');
        return moment(input).fromNow();
    }
});