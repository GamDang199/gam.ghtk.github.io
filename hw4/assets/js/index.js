$(document).ready(() => {
    $('.ul-feedback').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,  
        draggable: true,
        autoplaySpeed: 2000,
        autoplay:true,
        dots:true,
        infinite: true,
        dotsClass:"dots",
        focusOnSelect: true,
        customPaging : function(slider, i) {
            console.log(slider);
            return '<button href="#" class="feedback-dot w-[13px] h-[13px] mr-5 rounded-full  bg-Seeshell"></button>';
        }
    })
    $('.partner-content').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,  
        draggable: true,
        autoplaySpeed: 2000,
        autoplay:true,
    })
});
