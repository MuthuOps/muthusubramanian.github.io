let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

// Function to show the slide based on the index
function showSlide(index) {
    // Ensure the index wraps around
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Move the slides by translating the carousel
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
    });

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

// Auto slide every 5 seconds (optional)
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Initialize the first slide
showSlide(currentSlide);
