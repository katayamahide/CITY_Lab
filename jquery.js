
  $(function() {
    $('.menu-icon').click(function(){
      if($('.menu-icon').hasClass('close')){
        $(this).addClass('fa-bars').removeClass('fa-times close');
        $('.header-right').removeClass('header-right-active');
        $('.header-nav').removeClass('header-nav-active')
      } else {
        $(this).removeClass('fa-bars').addClass('fa-times close');
        $('.header-right').addClass('header-right-active');
        $('.header-nav').addClass('header-nav-active')
      }
    })
  });