$(function(){
	//////////////////// BOARD.JS
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
			$('.srchBox button').attr('title', '검색분류 열기');
			$('.src_list').slideUp(200);
		} else {
			$('.srchBox').removeClass('_on');
			$(this).parent('.srchBox').addClass('_on');
			$('.src_list').slideUp(200);
			$('.srchBox button').attr('title', '검색분류 열기');
			$(this).attr('title', '검색분류 닫기');
			$(this).parent().find('.src_list').slideDown(200);
		}
	});

	$('.src_list > li > a').on('click', function(){
		var srchText = $(this).text();
		$(this).parent().parent().parent().find('.srcName').text(srchText);
		$(this).parent().parent().slideUp(300);
		$('.srchBox').removeClass('_on');
		$('.srchBox button').attr('title', '검색분류 열기');
		$(this).parent().parent().next('.srchBox button').focus();
		return false;
	});

	// searchBox 두개 일 때
	$('.searchArea').each(function(){
		var srchL = $(this).find('.srchBox').length;
		if (srchL > 1) {
			$(this).addClass('tw');
		}
	});

	// focus out 일때 닫기
	$('.src_list > li:last-child').on('focusout', function(){
		$(this).parent().parent('.srchBox').removeClass('_on');
		$(this).parent().parent().find('button').attr('title', '검색분류 열기');
		$(this).parent().parent().find('.src_list').slideUp(200);
	});

	// 공지 slide
	$(document).ready(function(){
	   $('li.slick-slide').removeAttr('tabindex');
	});
	$('.type_a .noticeList').slick({
		dots: true,
	  infinite: false,
	  slidesToShow: 2,
	  slidesToScroll: 2,
		arrows: false,
		responsive: [
	    {
	      breakpoint: 641,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
	$('.type_thumb .noticeList').slick({
		dots: true,
	  infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		arrows: false,
	});

	// view type_b
	$(window).on('load resize', function() {
		$('.infoWrap2 ._w50 dl dt, ._infoWrap ._w50 dl dt').each(function(){
			if ( $(window).width() <= 420) {
				var dd50H = $(this).next('dd').height() + 21;
				//console.log(dd50H);
				$(this).css('min-height', dd50H);
			} else {
				$('.infoWrap2 ._w50 dl dt, ._infoWrap ._w50 dl dt').removeAttr('style');
			}
		});
	});

	// type_faq
	$('.type_faq .answerWrap').hide();
	$('.type_faq .data').click(function(){
		if($(this).parent('li').hasClass('open')){
			$('.type_faq > ul > li').removeClass('open');
			$('.answerWrap').stop().slideUp('fast');
			$('.type_faq .data').attr('title','열기');
			$(this).attr('title','열기');
			return false;
		} else {
			$('.type_faq > ul > li').removeClass('open');
			$(this).parent('li').addClass('open');
			$('.answerWrap').stop().slideUp('fast');
			$(this).siblings('.answerWrap').slideDown('fast');
			$('.type_faq .data').attr('title','열기');
			$(this).attr('title','닫기');
			return false;
		}
	});

	// write 답변
	$('.btnWrap .anwBtn').click(function(){
		$('.w_anwWrap').toggle();
	});


});
