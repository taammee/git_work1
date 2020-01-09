$(document).ready(function(){  
  //follow quick menu
  $(window).scroll(function(){
    var scrollTop = $(document).scrollTop();
      if (scrollTop < 180) {
      scrollTop = 80;
    }
    $(".srchLink").stop();
    $(".srchLink").animate( { "top" : scrollTop });
  });

  
  // 상세옵션 열기
  $('.detailWrap .dtlBtn, #key_fin').on('click',function(){
    $('.detailWrap .dtlBtn').toggleClass('_on');
    $('.detailArea').toggle();
  });

  // 요양원에 문의하기
  $('.toContactWrap .toContact').click(function(){
    $(this).siblings('.toContactBox').slideToggle(150);
  });
  $('.toContactBox .closeBtn').click(function(){
    $(this).parent('.toContactBox').slideToggle(150);
  });

  // 반응형 옵션 조건
  function rsltOpt() {
    var opt_cateName = $('#rsltWrap .rsltOpt .opt_cate li._on').text();
    $('#rsltWrap .opt_cate_open').attr('title', opt_cateName);
    $('#rsltWrap .opt_cate_open').text(opt_cateName);
    
    $('#rsltWrap .rsltOpt .opt_cate_open').off("click").on('click',function(){
      $('.rsltOpt .opt_cate').slideToggle(200);
      return false;
    });
    $('#rsltWrap .rsltOpt .opt_cate a').off("click").on('click', function(){
      var opt_cateText = $(this).text();
      $(this).parent().parent().parent().find('.opt_cate_open').text(opt_cateText);
      $(this).parent().parent().slideUp(300);
      return false;
    });
  }
  $(window).on('load resize', function(){
    if ($(window).width() < 930) {
      $('#rsltWrap .rsltOpt .opt_cate').hide();
      rsltOpt();
      return false;
    } else {
      $('#rsltWrap .rsltOpt .opt_cate').show();
      $('#rsltWrap .rsltOpt .opt_cate a').off('click');
    }
  });

  // 헤더 search open 버튼
  $('#srchBtn_h').click(function(){
    $('.sub_srchLine').toggleClass('show');
  });

  // 키워드 슬라이드
  $('.rsltKey .swiper-container > ul > li').addClass('swiper-slide');
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.rsltKey .swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: false,
    //spaceBetween: 10,
    navigation: {
      nextEl: '.rsltKey-prev',
      prevEl: '.rsltKey-next',
    },
  });

  // 검색리스트 :: 즐겨찾기
  $('#srchResult .heart').click(function(){
    $(this).toggleClass('on');
  });
  // 검색리스트 :: li
  $(window).bind('load resize', function(){
    // 검색리스트 :: 모바일에서 이미지 높이값 수정
    if ($(window).width() < 641) {
      var m_srchR_img = $('#srchResult .thumbArea img').height();
      $('#srchResult .thumbArea').css('height',m_srchR_img);
    } else {
      $('#srchResult .thumbArea').removeAttr('style');
    }
     
    // 검색리스트 :: li info height
    $('#srchResult > ul').each(function(){
      var highestBox = $('#srchResult .thumbInfo h3').height();
      if (highestBox > 60 && $(window).width() > 640) {
        $('#srchResult > ul > li').css('height', '578px');
        // 모바일크기에서는 적용 안되도록 수정
      } else {
        $('#srchResult > ul > li').removeAttr('style');
      }
    });
  });


  // 상세페이지 :: 즐겨찾기 & 공유하기 버튼
  $('.dt_right p.note').hide();
  $('.fs_btn button').on('mouseenter', function(){
    $('.fs_btn li').removeClass('focus');
    $(this).parent('li').addClass('focus');
  });
  $('.fs_btn button').on('mouseleave', function(){
    $('.dt_right p.note').hide().html('');
    $(this).parent('li').removeClass('focus');
  });
  $('.fs_btn li.fav button').on('click', function(){
    $(this).parent('li').toggleClass('on');
  });

  $('.fs_btn li.fav button').on('mouseenter', function(){
    if ($('.fs_btn li.fav').hasClass('on')) {
    } else {
      $('.dt_right p.note').show().html("<em>지금 보고계신 요양원</em>을 <strong>관심 요양원</strong>으로 <strong>추가</strong>합니다 !!");
    }
  });
  $('.fs_btn li.fav button').on('click', function(){
    if ($('.fs_btn li.fav').hasClass('on')) {
      $('.dt_right p.note').show().html("<strong>관심 요양원</strong>으로 <em>추가</em> 되었습니다 ! !");
    } else {}

  });
  $('.fs_btn li.share button').on('mouseenter', function(){
    $('.dt_right p.note').show().html("<strong>클릭</strong>하시면 <em>지금 보고계신 요양원</em>의 <strong>URL링크</strong>가 <strong>복사</strong>됩니다 !");
  });
  $('.fs_btn li.share button').on('click', function(){
    $('.dt_right p.note').show().html("<em>지금 보고계신 요양원</em>의 <strong>URL링크</strong>가 <strong>복사</strong>되었습니다 !");
  });

  // 상세페이지 :: 모바일 문의 링크 & mark
  $(window).on('load resize', function(){
    if($(window).width() < 641) {
      // mark
      var mark_lcms = $('.detailInfo .markBic.lcms p').html();
      $('.dt_mark .mark li.mark_lcms').html('<p>'+mark_lcms+'</p>');
      var mark_best = $('.detailInfo .markBic.best p').html();
      $('.dt_mark .mark li.mark_best').html('<p>'+mark_best+'</p>');
    } else if($(window).width() > 641) {
      $('.dt_mark .mark li').html('');

    }
  });

  // 상세페이지 :: 이미지 슬라이드
  $('.tabList li').click(function() {
    var activeTabli = $(this).attr('data-tab');
    $('.tabList li').removeClass('on');
    $('.dt_slide_wrap li').addClass('visibleHidden').removeClass('visible');
    $(this).addClass('on');
    $('#' + activeTabli).addClass('visible').removeClass('visibleHidden');
  })

  function rprst() {
    $('.rprst').not('.slick-initialized').slick({
      infinite: false,
      dots: true,
      focusOnSelect: false,
      arrows: true,
      adaptiveHeight: false,
      dotsClass:'rprst-thumb',// 사용자 css class ( 버튼들의 부모 엘리먼트 클래스)
      asNavFor: '.rprst-thumb',
      customPaging: function(slick,index) {
        var targetImage = slick.$slides.eq(index).find('img').attr('src');
        return '<img src=" ' + targetImage + ' ">';
      }
    });
    /* 썸네일 */    
    $('.rprst-thumb').not('.slick-initialized').slick({
      infinite: false,
      slidesToShow: 9,
      slidesToScroll: 9,
      dots: false,
      focusOnSelect: false, //초반 선택된 전체 slide에 slick-active 먹음
      arrows: false,
      centerMode: false,
      variableWidth: true,
    }); 
  }
  function rprstM() {    
    $('.rprst').not('.slick-initialized').slick({
      infinite: false,
      dots: true,
      autoplay: true,
      focusOnSelect: false,
      arrows: false
    });
  }
  
  rprst();
  $(window).on('load resize', function(){
    if($(window).width() > 640) {
      $('.rprst').slick('unslick');
      rprst();
      /* 초반 전체 슬라이드 slick-active 삭제 */
      $('.rprst-thumb > .slick-list > .slick-track > li.slick-active').removeClass('slick-active');
      $('.rprst-thumb > .slick-list > .slick-track > li:first-child').addClass('slick-active');
    } else if($(window).width() < 641) {
      $('.rprst').slick('unslick');
      rprstM();
    }
  });

  /* 상세페이지 :: 이미지 슬라이드 display:none 적용 안함 */
  $('.dt_slide_wrap > li').addClass('visibleHidden').removeClass('visible');
  $('.dt_slide_wrap > li:first-child').removeClass('visibleHidden').addClass('visible');

  function thumb_length() {  
    var thumb_length = $('.visible .rprst-thumb > .slick-list > .slick-track > li').length;    
    if (thumb_length > 9) {
      $('.dt_slide_wrap li').removeClass('up');
      $('.dt_slide_wrap li.visible').addClass('up');
    }  
  }
  thumb_length();
  $('.tabList li').click(function(){
    $('.rprst').slick('slickGoTo', 0);
    thumb_length();
  });


  // 상세페이지 :: 소개 내용
  $('.detail_list li, .system_list li').click(function() {
    var activeTab = $(this).attr('data-tab');
    $('.detail_list li, .system_list li').removeClass('on');
    $('.detail_text li, .system_text li').removeClass('on');
    $(this).addClass('on');
    $('#' + activeTab).addClass('on');
  })
  $('.detail_list').not('.slick-initialized').slick({
    infinite: false,
    slidesToShow: 10,
		slidesToScroll: 1,
    dots: false,
    focusOnSelect: false,
    arrows: false,
    centerMode: false,
    responsive: [
			{
				breakpoint: 1200,
				settings: {
          slidesToShow: 8,
          slidesToScroll: 4,
          arrows: true,
				}
			},
			{
				breakpoint: 900,
				settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          arrows: true,
				}
			},
			{
				breakpoint: 640,
				settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true,
          
				}
			},
			{
				breakpoint: 500,
				settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,

				}
			},
		]
  });

  // 상세페이지 :: 프로그램
  $('.picBtn').click(function(){
    $(this).siblings('.picWrap').fadeIn(300);
  });
  $('.picWrap').click(function(){
    $(this).fadeOut(300);
  });


  // 상세페이지 :: 후기보기
  var rvw_slide = $('.rvw_slideWrap .rvw_slide').not('.slick-initialized').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true
  });
  $('.detail_list li.li10 a').click(function(){
    rvw_slide.slick('refresh');
  });
  $('.rvw_eva .heartArea > button').click(function(){
    $(this).toggleClass('on');
  });
  $('.rvw_eva .replyArea button').click(function(){
    $(this).parent().parent().parent().find('.replyWrap').toggle();
  });
  $('.rvwWriteBtn').click(function(){
    $('.rvw_writeWrap').fadeIn();
    $('html, body').css({'overflow': 'hidden'}); // 모달팝업 중 html,body의 scroll을 hidden시킴 
  });
  $('.rvw_write ._write, .rvw_write .closeBtn').click(function(){
    $('.rvw_writeWrap').fadeOut();
    $('html, body').css({'overflow': 'auto'});
  });

  // 후기쓰기 별점 star rating
  var starRating = function(){
    var $star = $(".ico_rate"),
        $result = $star.find("em.rate>span");
    $(document)
      .on("focusin", ".ico_rate>.star_on", function(){
      $(this).addClass("focus");
    })
      .on("focusout", ".ico_rate>.star_on", function(){
      var $this = $(this);
      setTimeout(function(){
        if($this.find(":focus").length === 0){
          $this.removeClass("focus");
        }
      }, 100);
    })
      .on("change", ".ico_rate :radio", function(){
      $result.text($(this).next().text());
    })
      .on("mouseover", ".ico_rate label", function(){
      $result.text($(this).text());
    })
      .on("mouseleave", ".ico_rate>.star_on", function(){
      var $checked = $star.find(":checked");
      if($checked.length === 0){
        $result.text("0");
      } else {
        $result.text($checked.next().text());
      }
    });
  };
  starRating();
    


  // mypage 북마크 리스트
  $('.mp_tab li').click(function() {
    var mytab = $(this).attr('data-tab');
    $('.mp_tab li').removeClass('on');
    $('.mp_list li').removeClass('on');
    $(this).addClass('on');
    $('#' + mytab).addClass('on');
  })


});