// Smooth scrolling for navigation links
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Handling form submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (name && email && message) {
    alert('Thank you for reaching out! We will get back to you soon.');
    form.reset();
  } else {
    alert('Please fill out all fields.');
  }
});