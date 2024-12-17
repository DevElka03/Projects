// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example of handling a contact form submission (you'll need a server-side script for full functionality)
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form data (example)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here, you would typically send the data to a server-side script using AJAX (e.g., with Fetch API or XMLHttpRequest).
        // For demonstration, we'll just log the data to the console:
        console.log('Form Data:', { name, email, message });
        alert('Form submitted! (This is a placeholder. You need a server-side script to handle form data.)');

        // You might also want to clear the form after submission:
        // contactForm.reset();
    });
}