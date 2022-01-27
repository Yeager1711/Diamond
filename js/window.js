window onscroll
$(document).ready(function() {
  $(window).scroll(function() {
    if($(this).scrollTop()){
      $('header').removeClass('.sticky');

    }else{
        $('header').addClass('.sticky');
    }
  });
});
  