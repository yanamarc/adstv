const swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: false,
    freeMode: true,
    spaceBetween: 0,
    watchOverFlow: true,
    simulateTouch: true,
    breakpoints: {
        1430: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 3.1
        },
        639: {
            slidesPerView: 2.1
        }
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 140,

    }
});

const openFullscreen = (name) => {
    document.querySelector(`[data-id="${name}"]`).requestFullscreen()
}

