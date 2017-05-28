
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $(".head-sub-main");
   var offset = startchange.offset();
    if (startchange.length){
        
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").addClass("navbar-inverse bg-inverse");
       } else {
          $(".navbar").removeClass("navbar-inverse bg-inverse");
          $(".navbar").addClass("navbar");
       }
   });
    }

    $(document).ready(function () {
     $('a[href^="#"]').on("click", function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 80
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
     });
    });

});




