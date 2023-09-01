$(function () {
  /* 스와이퍼1 */
  // var swiper1 = new Swiper(".swiper1", {
  //   spaceBetween: 30, // 슬라이드간 간격
  //   loop: true, // 무한 반복
  //   pagination: {
  //     // 페이징
  //     el: ".swiper-pagination1",
  //     clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
  //   },
  //   autoplay: {
  //     delay: 4000,
  //   },
  //   navigation: {
  //     // 네비게이션
  //     nextEl: ".next1", // 다음 버튼 클래스명
  //     prevEl: ".prev1", // 이전 버튼 클래스명
  //   },
  //   on: {
  //     init: function () {
  //       // fraction에 현재 인덱스와 전체 인덱스 표시
  //       // this.loopedSlides는 loop, slidesPerView: 'auto'일 때 제대로 동작
  //       $(".slide_num .current").text(this.realIndex + 1);
  //       $(".slide_num .all").text(this.loopedSlides);
  //     },

  //     slideChangeTransitionStart: function () {
  //       // 페이지 넘어갈 때마다 fraction 현재 인덱스 변경
  //       $(".slide_num .current").text(this.realIndex + 1);
  //     },
  //   },
  // });

  

  


  


  // $('#header .header2_subWrap').animate({left:'0%'});
  // $('#header .header2_subWrap').animate({left:'100%'});

  

  




  // var lnb = $("header").offset().top;
  // $(window).scroll(function () {
  //   var window = $(this).scrollTop();

  //   if (lnb <= window) {
  //     $("header").addClass("fixed");
  //   } else {
  //     $("header").removeClass("fixed");
  //   }
  // })

});

/* 섹션 탭메뉴 */

$(function () {

  



  /* 섹션8 */

  /* magazin */
 $('#magazinSection .magazinWrap .ma_menu').hover(function(){

  $(this).next('.ma_description a').stop().css({color:'#f9bb00'});
  $(this).next('.ma_description a .ma_snsWrap .youtube_img').stop().css({'border-color':'#f9bb00'});
  $(this).next('.ma_description .magazin_title p').stop().css({color:'#f9bb00'});


 }, function(){
  $(this).next('.ma_description a').stop().css({color:'#000000'})
  $(this).next('.ma_description a .ma_snsWrap .youtube_img').stop().css({'border-color':'#dddddd'});
  $(this).next('.ma_description .magazin_title p').stop().css({color:'#888888'});

 })

 $('.ma_description').hover(function(){

  $(this).find('a').stop().css({color:'#f9bb00'});
  $(this).find('.ma_snsWrap .youtube_img').stop().css({'border-color':'#f9bb00'});
  $(this).find('.magazin_title p').stop().css({color:'#f9bb00'});
  $(this).prev().find('a img').css({scale:'1.1'});

 }, function(){
  $(this).find('a').stop().css({color:'#000000'})
  $(this).find('.ma_snsWrap .youtube_img').stop().css({'border-color':'#dddddd'});
  $(this).find('.magazin_title p').stop().css({color:'#888888'});
  $(this).prev().find('a img').css({scale:'1'});



 })

});

/* 푸터 */

$(function(){


 

})