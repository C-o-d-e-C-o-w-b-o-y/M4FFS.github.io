
$(function() {

//document.ready

});

$(window).on('load', function(){
    function checkFull() {
        var initial = document.getElementById('initialBackground');
        return (initial.scrollHeight > initial.clientHeight);
    }

    function randomBinary() {
        return ~~(Math.random() >= 0.5);
    }




    var initial = $('#initialBackground');

    while (!checkFull()) {
        var a = $('<a class="BB" style="opacity: 0; font-size: 2vw; font-family: Courier, monospace">0</a>');
        $(a).css('margin-top', Math.floor((Math.random() * 50) + 15));
        $(a).css('margin-right', Math.floor((Math.random() * 50) + 15));
        $(a).css('margin-bottom', Math.floor((Math.random() * 50) + 15));
        $(a).css('margin-left', Math.floor((Math.random() * 50) + 15));
        initial.append(a);
    }
    initial.children().last().remove();

    $('.BB').on('mouseover', function(){
        $(this).html(randomBinary());
        $(this).clearQueue();
        $(this).animate({opacity: '0.25'}, 300);
        $(this).delay(400).html(randomBinary());
        $(this).animate({opacity: '0.1'}, 300);
        $(this).animate({opacity: '0'}, 400);
    });

});
