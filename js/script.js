// Header Scroll Effect
const header = document.getElementById("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll(".nav-link-mobile, .btn-mobile");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Contact Form Handling
// const contactForm = document.getElementById("contactForm");

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Get form data
//   const formData = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//   };

//   // Log form data (in production, you would send this to a server)
//   console.log("Form submitted:", formData);

//   // Show success message (you can customize this)
//   alert("Thank you for your message! We will get back to you soon.");

//   // Reset form
//   contactForm.reset();
// });

// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Animate elements on scroll (optional enhancement)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe cards and sections for animation
document
  .querySelectorAll(".card, .service-card, .contact-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
// Video Modal Logic
var modal = document.getElementById("videoModal");
var videoPlayerDiv = document.getElementById("videoPlayer");

function openVideoModal(videoSrc) {
  videoPlayerDiv.innerHTML =
    '<video controls autoplay width="100%"><source src="' +
    videoSrc +
    '" type="video/mp4">Your browser does not support the video tag.</video>';
  modal.style.display = "block";
}

function closeVideoModal() {
  modal.style.display = "none";
  videoPlayerDiv.innerHTML = "";
}

// Close modal when clicking outside the modal box
window.onclick = function (event) {
  if (event.target == modal) {
    closeVideoModal();
  }
};
