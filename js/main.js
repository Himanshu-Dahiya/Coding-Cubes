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
                console.log("HI");
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
});


