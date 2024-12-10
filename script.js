// Smooth Scroll Functionality for Navigation Links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple Form Submission Handling
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        this.reset(); // Reset the form fields
    } else {
        alert('Please fill in all fields.');
    }
});

// Animate Skills Bar on Scroll
const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress-bar');

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const value = bar.getAttribute('aria-valuenow');
        bar.style.width = `${value}%`;
    });
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
        }
    });
}, {
    threshold: 0.5 // Trigger animation when 50% of the section is visible
});

if (skillsSection) {
    observer.observe(skillsSection);
}
