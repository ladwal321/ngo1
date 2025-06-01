// about.js

// Fade-in animation when elements enter viewport
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section-block');

  const observerOptions = {
    root: null,
    threshold: 0.1,
  };

  const fadeInOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);

  sections.forEach(section => {
    section.classList.add('fade-in-section'); // initial hidden state
    observer.observe(section);
  });

  // Hover effect for team members (scale-up)
  const teamMembers = document.querySelectorAll('.team-member');
  teamMembers.forEach(member => {
    member.addEventListener('mouseenter', () => {
      member.classList.add('hovered');
    });
    member.addEventListener('mouseleave', () => {
      member.classList.remove('hovered');
    });
  });

  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        document.querySelector(href).scrollIntoView({behavior: 'smooth'});
      } else {
        window.location.href = href;
      }
    });
  });
});
