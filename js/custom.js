$(document).ready(function(){
	// 로그인 시 loginArea width값에 맞춰 검색창 width 조절
	$(window).on('load resize', function(){
		var topSrch = $('.headerWrap .loginArea').width() + 240;
		if ($(window).width() > 981) {
			$('.headerWrap .sub_srchLine').css('width', 'calc(100% - ' + topSrch+ 'px)');
		} else {
			$('.headerWrap .sub_srchLine').removeAttr('style');
		}
	});
	// 로그인 시 마이페이지 박스 열기
	$('.loginArea .log-in button').click(function(){
		$('.loginArea .mypageBox').toggle();
	});

	//////////////////////////// 비주얼
	$('.visualArea').slick({
		infinite: true,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		dots: true,
		appendDots: '.dots',
		prevArrow: $(".vidBtn .prev"),
		nextArrow: $(".vidBtn .next"),
	});
	//dot & play버튼
	$('.visualArea').slick('slickPlay'); 
	$('.sl-psBtn button').click(function() { 
		$(this).toggleClass('start');
		if ($(this).hasClass('start')){
			$(this).text('슬라이드 재생');
			$('.visualArea').slick('slickPause');
		} else {
			$(this).text('슬라이드 정지');
			$('.visualArea').slick('slickPlay');
		}
	});

	//////////////////////////////// 검색조건
	$('.srchBox .src_list').hide();
	$('.srchBox-sel').on('click', function(){
		$('.srchBox').removeClass('_on');
		$(this).toggleClass('_on');
		$('.srchBox .src_list').slideUp(200);
	});

	$('.srchBox button').on('click', function(){
		$('.srchBox-sel').removeClass('_on');
		if ($(this).parent('.srchBox').hasClass('_on')) {
			$('.srchBox').removeClass('_on');
			$('.srchBox button').attr('title', '검색조건 열기');
			$('.src_list').slideUp(200);
		} else {
			$('.srchBox').removeClass('_on');
			$(this).parent('.srchBox').addClass('_on');
			$('.src_list').slideUp(200);
			$('.srchBox button').attr('title', '검색조건 열기');
			$(this).attr('title', '검색조건 닫기');
			$(this).parent().find('.src_list').slideDown(200);
		}
	});

	$('.src_list > li > a').on('click', function(){
		var srchText = $(this).text();
		$(this).parent().parent().parent().find('.srcName').text(srchText);
		$(this).parent().parent().slideUp(300);
		$('.srchBox').removeClass('_on');
		$('.srchBox button').attr('title', '검색조건 열기');
		$(this).parent().parent().next('.srchBox button').focus();
		return false;
	});
	$('#srchText').on('focusin', function(){
		$('.srchWrap').addClass('focus');
		$('.srchBox').removeClass('_on');
		$('.srchBox button').attr('title', '검색조건 열기');
		$('.srchBox .src_list').hide();
	});
	$('#srchText').on('focusout', function(){
		$('.srchWrap').removeClass('focus');
	});



	//////////////////////////////// 평점이 좋은 요양원
	
	// info icon
	$('.angelInfo > li > button').click(function(){
		$('li.slick-current .angelInfo > li').removeClass('on');
		$(this).parent('li').addClass('on');
	});
	
	// 요양원 평점 전체 슬라이드
	$('.angelList').slick({
		infinite: true,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 200,
		autoplay: false,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		arrows: false,
		dots: false,
		draggable: false,
		accessibility: false,
		asNavFor: '.angelThumb'
	});

		
	// 요양원 썸네일 슬라이드
	$(".angelThumb").slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.angelList',
		autoplay: false,
		dots: false,
		arrows: true,
		centerMode: true,
		variableWidth: true,
		centerPadding: 0,
		accessibility: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1001,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,

				}
			},
		]
	});


	function thumbClick() {		
		// 요양원 평점 이미지 슬라이드
		$('.angelList li.slick-active ul.imgArea').not('.slick-initialized').slick({
			infinite: false,
			fade: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 200,
			autoplay: false,
			autoplaySpeed: 3000,
			adaptiveHeight: true,
			arrows: true,
			dots: true,
			focusOnSelect: false,
			appendDots: $(".angelList li.slick-active .aView-dots"),
			prevArrow: $(".angelList li.slick-active .aViewBtn .prev"),
			nextArrow: $(".angelList li.slick-active .aViewBtn .next")
		});
	}
	thumbClick();
	$('.angelThumb li, .angelThumb .slick-arrow').click(function(){
		$('.titleBtn button.slickOn').addClass('on');
		thumbClick();
	});



	// 요양원 desktop 대표사진 , 특/장점 버튼
	$('.titleBtn button.slickOn').addClass('on');
	$('.titleBtn button').on('click', function(){
		$('.titleBtn button').removeClass('on');
		$(this).addClass('on');
	});
	$('.titleBtn button.slickOn').on('click', function(){
		$('.angelList .tagArea').hide();
		//$('.angelList ul.imgArea').slick('slickGoTo', '0')
	});
	$('.titleBtn button.textOn').on('click', function(){
		$('.angelList .tagArea').hide();
		$('.angelList li.slick-active .tagArea').show();
	});

	// 요양원 thumb img 위치
	$('.angelThumb .thumbArea img').each(function(){
		var $imgW = $(this).width() / 6;
		$('.angelThumb .thumbArea img').css('left',-$imgW);
	});



	// 요양원 desktop 대표사진 , 특/장점 버튼
	// $('.titleBtn li').text('요양원 대표 사진');
	// $('.titleBtn li:first-child').addClass('on');
	// $('.titleBtn li:last-child').addClass('last').text('특/장점');

	// 요양원 desktop title btn
	// $('.angelList .imgArea').on('afterChange', function(event, slick, currentSlide, nextSlide){
	// 	if($('.titleBtn li:last-child').hasClass('slick-active')){
	// 		$('.titleBtn li:first-child').removeClass('on');
	// 	} else {
	// 		$('.titleBtn li:first-child').addClass('on');
	// 	}
	// });

	// 요양원 반응형 aView-psBtn dot & play버튼
	// $('.aView-psBtn button').click(function() { 
	// 	$(this).toggleClass('start');
	// 	if ($(this).hasClass('start')){
	// 		$(this).text('슬라이드 재생');
	// 		$('.angelList .imgArea').slick('slickPause');
	// 	} else {
	// 		$(this).text('슬라이드 정지');
	// 		$('.angelList .imgArea').slick('slickPlay');
	// 	}
	// });
	// // 특/장점 backround-image
	// var $bgSrc = $('.angelList li.slick-current ul.imgArea li:nth-last-of-type(2)').find('img').attr('src');
	// $('.angelList li.slick-current ul.imgArea li.tagArea').css('background-image',"url('"+$bgSrc+"')");
	
	// 요양원 이미지 슬라이드 높이값
	$(window).on('load resize', function(){
		var starH = $('.angelView .titleArea .star').height();
		if(starH > 59){
			$('.angelView .angelInfo').css('height', '350px');
		} else {
			$('.angelView .angelInfo').removeAttr('style');
		}
	});


	//////////////////////////// 추천 요양원 슬라이드
	$('.bannerSlide').slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: true,
		dots: true,
		appendDots: '.b_slide_dot',
		prevArrow: $(".b_slide_btn .prev"),
		nextArrow: $(".b_slide_btn .next"),
	});


	///////////////////////////// login box
	$('.logBox .auth button, .joinBox .auth button').click(function(){
		$('.logBox .auth button, .joinBox .auth button').removeClass('on');
		$(this).addClass('on');
	});
	$('.loginArea ._loginBtn').click(function(){
		$('.logWrap').fadeIn(150);
	});
	$('.loginArea ._joinBtn').click(function(){
		$('.joinWrap').fadeIn(150);
	});
	$('.log-join .closeBtn, .joinBox .closeBtn').click(function(){
		$('.log-join, .joinTwoWrap, .complete').fadeOut(150);
	});

	//////////기능 생성후 삭제
	$('.generalBtn').click(function(){
		$('.joinWrap').hide();
		$('.joinWrapGeneral').fadeIn(150);
	});
	$('.managerBtn').click(function(){
		$('.joinWrap').hide();
		$('.joinWrapManager').fadeIn(150);
	});
	$('.joinTwoWrap ._btn._write').click(function(){
		$('.joinTwoWrap').hide();
		$('.complete').fadeIn(150);
	});
	$('.log-join .find_idBtn').click(function(){
		$('.logWrap').hide();
		$('.findWrap._id').fadeIn(150);
	});
	$('.log-join .find_passBtn').click(function(){
		$('.logWrap').hide();
		$('.findWrap._password').fadeIn(150);
	});

	///////////////////////////// 모바일 메뉴
	$('#mMenu').click(function(){
		$(this).toggleClass('on');
		if ($('#mMenu').hasClass('on')) {
			$('.mLogin').fadeIn();
		} else {
			$('.mLogin').fadeOut();
		}
	});
	$(window).on('load resize', function(){
		if($(window).width() > 640) {
			$('#mMenu').removeClass('on');
			$('.mLogin').hide();
		}
	});

	// 모바일 메뉴 height
	var bodyH = $('body').height();
	//console.log(bodyH);
	$('.mLogin').height(bodyH - 200);

	///////////////////////////// 모바일 굽은나무/엔젤헤퍼 링크 가져오기
	var srchLink = $('.srchLink').html();
	$('.loginLink').html(srchLink);

});