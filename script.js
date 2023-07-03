let slider1 = new Swiper(".swiper", {
    spaceBetween: 20,
    slidesPerGroup: 1,
    // loop: true,
    breakpoints: {
        1440: { slidesPerView: 7 },
        1024: { slidesPerView: 6 },
        768: { slidesPerView: 4 },
        550: { slidesPerView: 3 },
        0: { slidesPerView: 2 },
    },
})

let slider2 = new Swiper(".swiper2", {
    spaceBetween: 20,
    slidesPerGroup: 1,
    // loop: true,
    breakpoints: {
        1440: { slidesPerView: 7 },
        1024: { slidesPerView: 6 },
        768: { slidesPerView: 4 },
        550: { slidesPerView: 3 },
        0: { slidesPerView: 2 },
    },
})

slider1.controller.control = slider2
slider2.controller.control = slider1
