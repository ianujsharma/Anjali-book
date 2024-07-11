$(document).ready(function() {
    // Show caption of active slide when the page loads
    $('.carousel-item.active .carousel-caption').addClass('show');
});

// Activate caption animation when slide is shown
$('#postCarousel').on('slide.bs.carousel', function() {
    $('.carousel-caption').removeClass('show');
});

$('#postCarousel').on('slid.bs.carousel', function() {
    $('.carousel-item.active .carousel-caption').addClass('show');
});
// Function to animate elements on scroll
function animateOnScroll(selector, animationClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(function(element) {
        element.style.opacity = 0;
        element.style.transform = "translateY(50px)";
        element.style.transition = "opacity 0.8s ease, transform 0.8s ease";

        let elementPosition = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;

        window.addEventListener('scroll', function() {
            let scrollPosition = window.scrollY;

            if (scrollPosition > elementPosition - screenPosition + 100) {
                element.classList.add(animationClass);
                element.style.opacity = 1;
                element.style.transform = "translateY(0)";
            } else {
                element.style.opacity = 0;
                element.style.transform = "translateY(50px)";
            }
        });
    });
}

// Show newsletter section on scroll
animateOnScroll('.newsletter', 'animated');

// Show featured posts section on scroll
animateOnScroll('.post', 'animated');

// Show blog posts section on scroll
animateOnScroll('.blog-post', 'animated');