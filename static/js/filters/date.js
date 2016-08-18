app.filter('date',function (){
    return function (input){
        moment.locale('es');
        var actual = moment(new Date());
        var date = moment(input);
        var diff = actual.diff(date, 'days');
        if(diff > 7){
            return moment(input).format("YYYY-MM-DD");
        }else{
            return moment(input).fromNow();
        }
    }
});