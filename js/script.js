$(".owl-carousel").owlCarousel({
 nav:true,
 loop:true,
 navText: ["&#9668;", "&#9658;"],
 responsive: {
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}
});