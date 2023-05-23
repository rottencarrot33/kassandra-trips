setTimeout(function () {
    window.location.href = 'https://rottencarrot33.github.io/kassandra-trips/';
}, 3 * 60 * 1000);


// Find the <ul> element
var ulElement = document.querySelector('ul');

// Find the first <li> element within the <ul>
var liElement = ulElement.querySelector('li');

// Add '(bus stop)' to the first <li> element
liElement.textContent += ' (Bus stop)';
