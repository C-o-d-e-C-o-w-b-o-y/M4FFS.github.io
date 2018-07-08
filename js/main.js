
$(function() {



});

$(window).on('load', function(){
    function checkFull() {
        var initial = document.getElementById('initialBackground');
        return (initial.scrollHeight > initial.clientHeight);
    }
    var initial = $('#initialBackground');

    while (!checkFull()) {
        /*var a = document.createElement('a');
        a.innerHTML = '0';
        a.style.padding = '1px';
        a.style.fontSize = '20px';
        a.style.fontFamily = 'Courier new';
        */
        if (Math.random() >= 0.5) {
            initial.append($('<a class="BB" style="opacity: 0; margin: 15px; font-size: 3vw;">0</a>'));
        } else {
            initial.append($('<a class="BB" style="opacity: 0; margin: 15px; font-size: 3vw;">1</a>'));
        }

    }
    initial.children().last().remove();

    $('.BB').on('mouseover', function(){
        $(this).animate({opacity: '0.4'}, 400);
        $(this).animate({opacity: '0'}, 800);
    });

});
