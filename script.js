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

// 5-Theme cycling functionality
const themes = ['dark', 'light', 'purple', 'emerald', 'sunset'];
let currentThemeIndex = 0;

// Get saved theme or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
currentThemeIndex = themes.indexOf(savedTheme);
if (currentThemeIndex === -1) currentThemeIndex = 0;

// Apply theme function
function applyTheme(themeName) {
    // Remove all theme classes
    document.body.classList.remove('theme-light', 'theme-purple', 'theme-emerald', 'theme-sunset');

    // Apply the selected theme class
    if (themeName !== 'dark') {
        document.body.classList.add(`theme-${themeName}`);
    }
}

// Apply saved theme on load
applyTheme(savedTheme);

// Theme toggle click handler - cycles through all 5 themes
document.getElementById('theme-toggle').addEventListener('click', () => {
    // Cycle to next theme
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const newTheme = themes[currentThemeIndex];

    // Apply theme
    applyTheme(newTheme);

    // Save to localStorage
    localStorage.setItem('theme', newTheme);
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navbar.classList.contains('active')) {
        closeMenu();
    }
});

// Mouse-following particle cluster effect
const mouseParticles = [];
const maxMouseParticles = 6;

function createMouseParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'mouse-particle';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';

    // Random offset for cluster effect
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
    particle.style.setProperty('--offset-x', offsetX + 'px');
    particle.style.setProperty('--offset-y', offsetY + 'px');

    document.body.appendChild(particle);
    mouseParticles.push(particle);

    // Remove old particles
    if (mouseParticles.length > maxMouseParticles) {
        const oldParticle = mouseParticles.shift();
        oldParticle.remove();
    }
}

// Track mouse movement
let lastX = 0;
let lastY = 0;
let particleTimer = null;

document.addEventListener('mousemove', (e) => {
    const distance = Math.sqrt(
        Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2)
    );

    // Only create particle if mouse moved significantly
    if (distance > 10) {
        createMouseParticle(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
    }
});