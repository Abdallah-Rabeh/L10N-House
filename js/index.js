"use strict";
$("body").css('marginTop',$('nav').innerHeight());
$("header").css('height',$("window").innerHeight() - $("nav").innerHeight());
$("nav .nav-item").click(function(){
$(this).addClass("active").siblings().removeClass("active");

});
$(document).scroll (function(){
if($(document).scrollTop()<=10){
$("nav navbar-brand").animate({"width":"12%"},{
duration: 500,
queue:false
});
}
else{
$("nav navbar-brand").animate({"width":"10%"},{
    duration: 500,
    queue:false
})
}
})
//end header a navber 




//Start About


