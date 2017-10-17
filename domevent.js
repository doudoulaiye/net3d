$(document).ready(function(){
    $('.basetime').hover(function(event) {
        $(event.target).addClass("btnbg");
    }, function() {
        console.log(currentTime!=event.target.innerHTML,currentTime,event.target.innerHTML);
        if(currentTime!=event.target.innerHTML){
            $(event.target).removeClass("btnbg");
        }
    });
    $('.basetime').click(function(event) {
        $('.basetime').removeClass("btnbg");
        currentTime = event.target.innerHTML;
        $(event.target).addClass("btnbg");
    });
 });

