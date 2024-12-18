// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form'); // Changed ID to match

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form data
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return; // Stop submission
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return; // Stop submission
    }

    // Here, you would typically send the data to a server-side script using AJAX
    // (e.g., with Fetch API or XMLHttpRequest).
    // For demonstration, we'll just log the data to the console:
    console.log('Form Data:', {
      name,
      email,
      message
    });
    alert('Form submitted! (Check console for data)');

    // Optionally, clear the form after submission:
    contactForm.reset();
  });
}

// Email Validation Function
function validateEmail(email) {
  // Simple email validation regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
