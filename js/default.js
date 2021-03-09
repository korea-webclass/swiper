$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
        // effect: 'fade',
        loop: true,
        speed : 500,
        autoplay: true,
        delay: 3000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});