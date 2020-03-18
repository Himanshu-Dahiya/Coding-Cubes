jQuery(document).ready(function(){
       
    "use strict"
      $('.slider').ripples({
      dropRadius: 13,
      perturbance: 0.01,
}); 
    
     $('.text').typed({
        strings: ['<strong> I LOVE </strong> <strong class="primary"> CODINGS. </strong>','<strong> AND TO </strong> <strong class="primary"> SHARE!!  </strong>'],
         typespeed: 0,
         loop:true
     });
    
    $(window).scroll(function(){
       var top=$(window).scrollTop();
        if(top>=60)
            {
                $("nav").addClass('secondary');
            }
        else
            {
                if($("nav").hasClass('secondary'))
                    {
                        $("nav").removeClass('secondary');
                    }
            }
    });
    
        $('.works').magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image',
            gallery:{            //for navigating arrows
                enabled:true
            }     
        });
    $('#team-members').owlCarousel({
        items:3,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
               items:3 
            }
        }
    });
    
    $('.counter').counterUp({
        delay:10,
        time:1000
    });
    
    $('a').smoothScroll();
});


