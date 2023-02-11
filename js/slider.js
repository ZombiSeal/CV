let slides = document.querySelectorAll('.slider__slide');
let btns = document.querySelectorAll('.slider__btn');
let currentSlide = 0;


btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        currentSlide = i;
        manualNav(i);
        moveSlide();
    });
});

const moveSlide = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

const manualNav = (manual) => {
    btns.forEach((btn) => {
        btn.classList.remove("slider__btn_active");
    });

    btns[manual].classList.add('slider__btn_active');
}


const autoPlaySlide = () => {
    if (currentSlide === slides.length - 1) currentSlide = -1;
    currentSlide++;
    manualNav(currentSlide);
    moveSlide();
}

setInterval(autoPlaySlide, 6000);

