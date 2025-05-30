document.addEventListener('DOMContentLoaded', function () {
  // Form handling
  const form = document.getElementById('signupForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const confirm = document.getElementById('confirm').value;
      const description = document.getElementById('description').value.trim();
      const message = document.getElementById('message');

      if (!name || !email || !password || !confirm || !description) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        return;
      }

      if (password !== confirm) {
        message.textContent = 'Passwords do not match.';
        message.style.color = 'red';
        return;
      }

      // Simulate successful sign up
      message.textContent = `Welcome, ${name}! Your account has been created.`;
      message.style.color = '#0c8640';
    });
  }

  // Hamburger menu functionality
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
