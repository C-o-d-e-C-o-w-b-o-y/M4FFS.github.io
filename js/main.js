
$(function() {
    var ImageArray = ['img/code-bg-1.png','img/code-bg-2.png','img/code-bg-3.png','img/code-bg-4.png'];
    $('.parallax-slider').eq(1).attr("src", ImageArray[Math.floor(Math.random() * ImageArray.length)]);
});

$(window).on('load', function(){
    var matrix = $('#matrixBackground');

    function randomBinary() {
        return ~~(Math.random() >= 0.5);
    }

    //      Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
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

    }

    for (var i=0; i<5; i++) {
        var left = Math.floor(Math.random() * 49)*2 + 'vw';
        matrixRain(left);
    }










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
