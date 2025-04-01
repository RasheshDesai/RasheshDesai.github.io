document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");

    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');

    if (!themeToggle) {
        console.error("Theme toggle button not found!");
        return;
    }

    // Load saved theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = "☀️";  // Set to sun icon for light mode
    }

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        // Change button icon
        themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
    });

    console.log("Theme toggle initialized");
});


// Project Filter
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        let filter = this.getAttribute('data-filter');
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? 
                'block' : 'none';
        });
    });
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section, .project-card, .achievement-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);