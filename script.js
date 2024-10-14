let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const carousel = document.querySelector('.carousel');

// Function to show the slide based on the index
function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
    });

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

// Click event to slide to the next project
carousel.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Auto slide every 5 seconds (optional)
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Initialize the first slide
showSlide(currentSlide);
