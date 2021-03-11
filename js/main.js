$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
// $(document).ready(function(){
//     var swiper = new Swiper('.swiper-container', {
//         slidesPerView: 3,
//         direction: getDirection(),
//         loop: true,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         on: {
//             resize: function () {
//                 swiper.changeDirection(getDirection());
//             }
//         }
//     });

//     function getDirection() {
//         var windowWidth = window.innerWidth;
//         var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

//         return direction;
//     }
// });