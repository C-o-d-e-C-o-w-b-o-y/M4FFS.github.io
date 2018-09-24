$(function() {
    window.onscroll = function() {checkProductButton()};
    var productsBtn = document.getElementById('productsContainer');
    function checkProductButton() {
        if (!document.getElementById('productsContainer')) {
            return;
        }
        //ugly hardcode
        document.getElementById('productsContainer').style.left = document.getElementById('topBarProducts').offsetLeft + document.getElementById('topBarProducts').offsetWidth - 124 + 'px';
        productsBtn.classList.remove("sticky");
      if (window.pageYOffset >= productsBtn.offsetTop + 40) {
        productsBtn.classList.add("sticky")
      }
    }
});

function openNav() {
    $('#overlayNav').css('height', '100%');
    $('#menuBtn').fadeOut(200);
}

function closeNav() {
    $('#overlayNav').css('height', '0%');
    $('#menuBtn').fadeIn(200);
}

//index.html

function goAbout() {
    window.location.href = 'about.html';
}

function goProcess() {
    window.location.href = 'process.html';
}

function goBenefits() {
    window.location.href = 'benefits.html';
}

function goProducts() {
    window.location.href = 'products.html';
}

function goDelivery() {
    window.location.href = 'delivery.html';
}

function goGallery() {
    window.location.href = 'gallery.html';
}
