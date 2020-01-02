$(document).ready(function(){
    $('#nav > li').on('mouseover focusin', function(){
        $('#nav > li').removeClass('_on');
        $(this).addClass('_on');
    });
});