 $(document).on('scroll', function() {
    
     if ($(document).scrollTop() > 90) {

         $('nav').addClass('navmenu');
         $('li').css({
            
             'font-size':'10px'
         
        } );
 
} else if ($(document).scrollTop() < 89) {

         $('nav').removeClass('navmenu');
 
}
    console.log($(document).scrollTop())
    
});
 


 