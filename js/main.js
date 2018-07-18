/*

Notes for new matrix:

10-long snakes
all same speed
fade out
decrement by fixed margin
OCR-A font?
Minecraft font?
RS font?
https://damieng.com/blog/2011/02/20/typography-in-8-bits-system-fonts
https://www.deviantart.com/shabbygirlblog/art/Green-Matrix-Code-Gif-528227911

*/


$(function() {
    var ImageArray = ['img/code-bg-1.png','img/code-bg-2.png','img/code-bg-3.png','img/code-bg-4.png'];
    $('.parallax-slider').eq(1).attr("src", ImageArray[Math.floor(Math.random() * ImageArray.length)]);
});

$(window).on('load', function(){
    var matrix = $('#matrixBackground');

    function randomAscii() {
        return String.fromCharCode(Math.floor(Math.random() * 94 + 33));
    }

    //      Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
    function matrixRain(left) {
        var a = $('<a class="mB">'+randomAscii()+'</a>');
        $(a).css('left', left);
        $(a).css('top', 0);
        var rain = setInterval(function(){
            $(a).css('top', '+=22px');
            var x = a.clone();
            $(x).html(randomAscii());
            $(x).css('color', 'white');
            matrix.append(x);
            $(x).fadeOut(2000, function() {
                $(this).remove();
            });
            setTimeout(function() {
                $(x).css('color', '#20C20E');
            }, 150)
            if (Number($(a).css('top').slice(0, -2)) >= window.innerHeight) {
                clearInterval(rain);
            }
            //console.log('length = '+document.getElementsByTagName('a').length+', top = '+$(a).css('top')+', height = '+window.innerHeight);
            //console.log('boolean = '+(Number($(a).css('top').slice(0, -2)) >= window.innerHeight));
        }, 150);
    }




    (function loop() {
    var randTime = Math.round(Math.random() * (2000 - 999)) + 999;
    setTimeout(function() {
    var left = Math.floor(Math.random() * 49)*2 + 'vw';
    matrixRain(left);
        console.log(document.getElementsByTagName('a').length);
            loop();
    }, randTime);
    }());



    /*
    function matrixRain(left) {
        var arr = []

        for (var i=1; i < Math.floor(Math.random() * (12 - 8)) + 7; i++) {
            var a = $('<a class="mB">0</a>');
            $(a).css('left', left);
            $(a).css('top', i*22);
            arr.push(a);
        }

        var a = $('<a class="mB" style="color: white">0</a>');
        $(a).css('left', left);
        $(a).css('top', (i)*22);
        arr.push(a);

        var fallTime = Math.floor(Math.random() * (8000 - 4000)) + 4000;
        $.each($(arr), function(ignore, a) {
            //Add to matrix and make fall at random fallTime
            matrix.append(a);
            $(a).animate({top: '+=100%'}, fallTime);
            //Change each digit randomly, a random number of times
            var changeTimes = Math.floor(Math.random() * fallTime/500) + 5;
            for (var i=0; i<changeTimes; i++) {
                setTimeout(function() {
                    $(a).html(randomBinary());
                }, i*fallTime/changeTimes)
            }
        })

    }*/

    /*
    function checkFull() {
        var initial = document.getElementById('matrixBackground');
        return (initial.scrollHeight > initial.clientHeight);
    }

    function randomBinary() {
        return ~~(Math.random() >= 0.5);
    }

    var initial = $('#matrixBackground');

    while (!checkFull()) {
        var a = $('<a class="BB" style="opacity: 0.1; font-size: 2vw; font-family: Courier, monospace">0</a>');
        $(a).css('margin', 20);

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
    */
});
