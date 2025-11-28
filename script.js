// Select DOM elements
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const menuIcon = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

// Mobile menu functions
function toggleMenu() {
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
}

function closeMenu() {
    menuIcon.classList.remove('active');
    navbar.classList.remove('active');
}

// Event listeners
menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        closeMenu();
    }
});

// Close menu on scroll
window.addEventListener('scroll', () => {
    if (window.innerWidth <= 768 && navbar.classList.contains('active')) {
        closeMenu();
    }
});

// Active section detection
window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const linkHref = link.getAttribute('href').replace('#', '');
                if (linkHref === id) {
                    link.classList.add('active');
                }
            });
        }
    });
};

// ScrollReveal initialization
ScrollReveal({
    reset: false,
    distance: '15px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.left', { origin: 'left' });
ScrollReveal().reveal('.right', { origin: 'right' });
ScrollReveal().reveal('.top', { origin: 'top' });
ScrollReveal().reveal('.bottom', { origin: 'bottom' });

// Typed.js initialization
const typed = new Typed('.multiple-text', {
    strings: ['Data Scientist', 'AI Enthusiast', 'Tech Innovator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Particle system initialization
function initParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        const animationType = `float-${Math.floor(Math.random() * 3) + 1}`;
        particle.style.animation = `${animationType} ${15 + Math.random() * 15}s infinite linear`;
        
        const size = 4 + Math.random() * 8;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        container.appendChild(particle);
    }
}

// Initialize particles
window.addEventListener('load', initParticles);

// Theme toggle functionality
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.classList.toggle('light-theme', savedTheme === 'light');

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navbar.classList.contains('active')) {
        closeMenu();
    }
});