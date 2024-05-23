const cardWidth = document.querySelector('.card').offsetWidth;

    function prevSlide(carouselId) {
        const carousel = document.getElementById(carouselId);
        const currentIndex = Math.max(0, Math.floor(carousel.scrollLeft / cardWidth) - 1);
        carousel.scrollTo({
            left: currentIndex * cardWidth,
            behavior: 'smooth'
        });
    }

    function nextSlide(carouselId) {
        const carousel = document.getElementById(carouselId);
        const currentIndex = Math.min(carousel.children.length - 1, Math.ceil(carousel.scrollLeft / cardWidth) + 1);
        carousel.scrollTo({
            left: currentIndex * cardWidth,
            behavior: 'smooth'
        });
    }