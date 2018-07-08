
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
        var a = $('<a class="BB" style="color: white; margin: 30px; font-size: 3vw;">0</a>');
        initial.append(a);
    }
    initial.children().last().remove();



});
