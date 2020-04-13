$(document).ready(function() {
  
  $('.header__list a[href^="#"]').click(function () { 
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if($.browser){
      $('body').animate( { scrollTop: destination }, 1100 );
    }else{
      $('html').animate( { scrollTop: destination }, 1100 );
    }
    return false;
  });

  $('.burger-menu').click( function() {
    $('.burger-menu, .header__list').toggleClass('active');
  });
  $("a").click(function(){
    $('.burger-menu, .header__list').removeClass('active');
  });

  function setProgressBar() {
    var qNum = $('.form_questions__item').length;
    var length = (100 / qNum);
    $('.form-header__progress-bar').css('width', length + '%');
  
    var questions = $('.form_questions__item');

    var maxHeight = 0;

    questions.each(function(idx, elem) {
      var thisH = $(this).height();
      if (thisH > maxHeight) { maxHeight = thisH }
    });

    $('.form-body').height(maxHeight);
  }

  setProgressBar();
  
  $('.btn-next').on('click', function(e) {
    e.preventDefault();

    var $question = $(this).closest('.form_questions__item');
    $question.addClass('left').removeClass('center right');
    $question.next().addClass('center').removeClass('right left');

    var qNum = $('.form_questions__item').length;
    var id = $(this).closest('.form_questions__item').attr('data-qid');
    var length = (100 / qNum) + (100 / qNum) * id;

    $('.form-header__progress-bar').css('width', length + '%');
  });

  $('.btn-prev').on('click', function(e) {
    e.preventDefault();

    var $question = $(this).closest('.form_questions__item');
    $question.removeClass('center').addClass('right');
    $question.prev().removeClass('left').addClass('center');

    var qNum = $('.form_questions__item').length;
    var id = $(this).closest('.form_questions__item').attr('data-qid');
    var length = (100 / qNum) + (100 / qNum) * (id - 2);

    $('.form-header__progress-bar').css('width', length + '%');
  });

  $('.reviews__items').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    speed: 1000,
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  
  // $(".form-body__input").click(function(){
  //   $('.form-body__input span::after').toggleClass('radio-click');
  // });

});
