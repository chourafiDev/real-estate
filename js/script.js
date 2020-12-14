// Start Slider Here
var mySwiper = new Swiper('#property-slider .swiper-container', {
    // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        
        // For Responsive Service, Property Section
        breakpoints: {
            640: {
            slidesPerView: 1,
            spaceBetween: 10,
            },
            768: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            },
        }
    })
 // End Slider Here

 // Start Testemonial Slider Here
var mySwiper = new Swiper('.testemonial-slider .swiper-container', {
    // Optional parameters
        loop: true
    })
 // End Testemonial Here