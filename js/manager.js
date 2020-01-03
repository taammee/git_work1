$(document).ready(function(){
    $('#nav > li').on('mouseover focusin', function(){
        $('#nav > li').removeClass('_on');
        $(this).addClass('_on');
    });
    // 기존 키워드 삭제 & 기존 키워드가 없을때 dd 삭제
    $('._keyAdd > dd > span > ._del').click(function(){
        $(this).parent('span').remove();
        $('._keyAdd > dd').each(function(){
            var keyL = $(this).find('> span').length;
            if (keyL < 1) {
                $(this).remove();
            }
        }); 
    });

});