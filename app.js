
document.addEventListener("DOMContentLoaded", function (event) {
    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const targetSlide = urlParams.get('slide');

    // Activate the specified slide
    if (targetSlide) {
        const carousel = document.getElementById('rotating-carousel');
        const carouselInstance = new bootstrap.Carousel(carousel);
        carouselInstance.to(parseInt(targetSlide) - 1);
    }
});



// Set the timeout for refreshing the page 
function refreshPage() {
    window.location.reload();
}

setTimeout(refreshPage, 30 * 60 * 1000);




// **** NO DIMMING ****

// Function to simulate a click event on the document body
function simulateClick() {
    var event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    document.body.dispatchEvent(event);
}

// Interval in milliseconds at which to simulate the click
var interval = 15 * 60 * 1000; // 15 minutes

// Set up the interval to simulate the click
var clickInterval = setInterval(simulateClick, interval);






