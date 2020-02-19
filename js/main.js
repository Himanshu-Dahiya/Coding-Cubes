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
});


