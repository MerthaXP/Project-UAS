// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Highlight Active Section on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust offset as needed
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove existing active class
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active'); // Add active class to current section link
        }
    });
});

// Contact Form Validation
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', (e) => {
    const nameInput = document.querySelector('#contact input[name="name"]');
    const emailInput = document.querySelector('#contact input[name="email"]');
    const messageInput = document.querySelector('#contact textarea[name="message"]');

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        e.preventDefault(); // Prevent form submission
        alert('Please fill in all fields before submitting the form.');
    } else {
        alert('Thank you for contacting us! Your message has been sent.');
    }
});

// Optional: Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.backgroundColor = '#4a2c2a';
backToTopButton.style.color = '#f0c674';
backToTopButton.style.border = 'none';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
