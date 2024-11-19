// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(index) {
    // Hide all slides except the one matching the index
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Show the first slide initially
showSlide(currentSlide);

// Automatically change slides every 3 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav ul li a, .get-started');
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Submission Handler
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();

    if (name && email) {
        alert(`Thank you, ${name}! You have successfully subscribed with ${email}.`);
        form.reset(); // Clear the form fields
    } else {
        alert('Please fill in all the fields before submitting.');
    }
});

// Contact Form Validation
const contactForm = document.querySelector('#contact-form form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default submission
    const name = contactForm.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = contactForm.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();

    if (name && email && message) {
        alert(`Thank you for reaching out, ${name}! We will respond to your query soon.`);
        contactForm.reset(); // Reset the form fields
    } else {
        alert('Please fill out all fields before sending your message.');
    }
});

//search from google
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');

// Add focus event to input
searchInput.addEventListener('focus', () => {
    searchBox.classList.add('active');
});

// Remove focus event when input is blurred
searchInput.addEventListener('blur', () => {
    searchBox.classList.remove('active');
});

// Handle button click to perform Google search
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        const googleSearchURL = `http://localhost:63342/Exam/Index.html?_ijt=oa2ns6katddrplidq05bu8637&_ij_reload=RELOAD_ON_SAVE`;
        window.open(googleSearchURL, '_blank');
    } else {
        alert('Please enter a search term.');
    }
});

// Optionally handle "Enter" key press
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});

