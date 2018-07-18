$(function() {
    var ImageArray = ['img/code-bg-1.png','img/code-bg-2.png','img/code-bg-3.png','img/code-bg-4.png'];
    $('.parallax-slider').eq(1).attr("src", ImageArray[Math.floor(Math.random() * ImageArray.length)]);

    function randomAscii() {
        return String.fromCharCode(Math.floor(Math.random() * 94 + 33));
    }

    function matrixRain(left) {
        var a = $('<a class="mB">'+randomAscii()+'</a>');
        $(a).css('left', left);
        var rain = setInterval(function(){
            var x = a.clone();
            $(x).html(randomAscii());
            $(x).css('color', 'white');
            matrix.append(x);
            $(x).fadeOut(1750, function() {
                $(this).remove();
            });
            setTimeout(function() {
                $(x).css('color', '#20C20E');
            }, 90)
            $(a).css('top', '+=21px');
            if (Number($(a).css('top').slice(0, -2)) >= window.innerHeight) {
                clearInterval(rain);
            }
        }, 90);
    }

    var matrix = $('#matrixBackground');
    (function loop() {
    var randTime = Math.round(Math.random() * (2500 - 1499)) + 1500;
    setTimeout(function() {
    var left = Math.floor(Math.random() * 49)*2 + 'vw';
        matrixRain(left);
        loop();
    }, randTime);
    }());
});

$(window).on('load', function(){
    $(".loadingPage").fadeOut("slow");
});
