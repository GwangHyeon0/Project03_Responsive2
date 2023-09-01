$(function(){

  if(matchMedia("screen and (max-width: 600px)").matches){ 
    //화면 크기가 767px이하일때
    /* 스크롤 오프셋 */

    // section02
  var $section02 = $('#section02');

  
    $(window).scrollTop(function(){
      $section02.addClass('animate')
    })
  
 


  // section03
  var $section03 = $('#section03');

  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $section03.addClass('animate')
    }
  });

  // product
  var $product = $('#product');

  $(window).scroll(function(){
    if($(this).scrollTop() > 600){
      $product.addClass('animate')
    }
  });

  // #guide #guide_bg
  var $guide_bg = $('#guide #guide_bg');

  $(window).scroll(function(){
    if($(this).scrollTop() > 1300){
      $guide_bg.addClass('animate')
    }
  });

  // #guide .guideMenu
  var $guideMenu = $('#guide .guideMenu');

  $(window).scroll(function(){
    if($(this).scrollTop() > 1300){
      $guideMenu.addClass('animate')
    }
  });

  // #map
  var $map = $('#map');

  $(window).scroll(function(){
    if($(this).scrollTop() > 1800){
      $map.addClass('animate')
    }
  });


  // #download .downloadBox
  var $downloadBox = $('#download .downloadBox');

  $(window).scroll(function(){
    if($(this).scrollTop() > 2100){
      $downloadBox.addClass('animate')
    }
  });

  // #magazinSection
  var $magazinSection = $('#magazinSection');

  $(window).scroll(function(){
    if($(this).scrollTop() > 2400){
      $magazinSection.addClass('animate')
    }
  });
    console.log("mobile");
  }else if(matchMedia("screen and (max-width: 819px)").matches){
    /* 스크롤 오프셋 */

    // section02
  var $section02 = $('#section02');

  $(window).scrollTop(function(){
    $section02.addClass('animate')
  })


  // section03
  var $section03 = $('#section03');

  $(window).scroll(function(){
    if($(this).scrollTop() > 300){
      $section03.addClass('animate')
    }
  });

  // product
  var $product = $('#product');

  $(window).scroll(function(){
    if($(this).scrollTop() > 600){
      $product.addClass('animate')
    }
  });

  // #guide #guide_bg
  var $guide_bg = $('#guide #guide_bg');

  $(window).scroll(function(){
    if($(this).scrollTop() > 1300){
      $guide_bg.addClass('animate')
    }
  });

  // #guide .guideMenu
  var $guideMenu = $('#guide .guideMenu');

  $(window).scroll(function(){
    if($(this).scrollTop() > 1300){
      $guideMenu.addClass('animate')
    }
  });

  // #map
  var $map = $('#map');

  $(window).scroll(function(){
    if($(this).scrollTop() > 1900){
      $map.addClass('animate')
    }
  });


  // #download .downloadBox
  var $downloadBox = $('#download .downloadBox');

  $(window).scroll(function(){
    if($(this).scrollTop() > 2200){
      $downloadBox.addClass('animate')
    }
  });

  // #magazinSection
  var $magazinSection = $('#magazinSection');

  $(window).scroll(function(){
    if($(this).scrollTop() > 2600){
      $magazinSection.addClass('animate')
    }
  });
    console.log("tablet");
  }else if(matchMedia("screen and (min-width: 820px)").matches){
    /* 스크롤 오프셋 */

    // section02
  var $section02 = $('#section02');

  $(window).scrollTop(function(){
    $section02.addClass('animate')
  })


  // section03
  var $section03 = $('#section03');

  $(window).scroll(function(){
    if($(this).scrollTop() > 500){
      $section03.addClass('animate')
    }
  });

  // product
  var $product = $('#product');

  $(window).scroll(function(){
    if($(this).scrollTop() > 1100){
      $product.addClass('animate')
    }
  });

  // #guide #guide_bg
  var $guide_bg = $('#guide #guide_bg');

  $(window).scroll(function(){
    if($(this).scrollTop() > 1900){
      $guide_bg.addClass('animate')
    }
  });

  // #guide .guideMenu
  var $guideMenu = $('#guide .guideMenu');

  $(window).scroll(function(){
    if($(this).scrollTop() > 1900){
      $guideMenu.addClass('animate')
    }
  });

  // #map
  var $map = $('#map');

  $(window).scroll(function(){
    if($(this).scrollTop() > 2800){
      $map.addClass('animate')
    }
  });

  // #download .download_bg
  var $download_bg = $('#download .download_bg');

  $(window).scroll(function(){
    if($(this).scrollTop() > 3400){
      $download_bg.addClass('animate')
    }
  });

  // #download .downloadBox
  var $downloadBox = $('#download .downloadBox');

  $(window).scroll(function(){
    if($(this).scrollTop() > 3400){
      $downloadBox.addClass('animate')
    }
  });

  // #magazinSection
  var $magazinSection = $('#magazinSection');

  $(window).scroll(function(){
    if($(this).scrollTop() > 4000){
      $magazinSection.addClass('animate')
    }
  });
    console.log("desktop");
  }


});