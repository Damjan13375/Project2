
$(function(){
$(".carousel-control").hover(function(){
   if ($(this).hasClass("left")){
       $("#dNoneL").css({display: "block"})
   }
   if ($(this).hasClass("right")){
    $("#dNoneR").css({display: "block"})
}
}, function(){
    if ($(this).hasClass("left")){
        $("#dNoneL").css({display: "none"})
    }
    if ($(this).hasClass("right")){
     $("#dNoneR").css({display: "none"})
 }
});

$('#carousel-example-generic').bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta /120 > 0) {
      $(this).carousel('next');
    }
    else{
      $(this).carousel('prev');
    }
  });

 });
