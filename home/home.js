// Number count up animation for impact section
const counters = document.querySelectorAll('.impact-item .number');
const speed = 2000; // duration in ms

function countUp(el) {
  const target = +el.getAttribute('data-target');
  let count = 0;
  const increment = target / (speed / 16);

  function update() {
    count += increment;
    if (count < target) {
      el.textContent = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString();
    }
  }
  update();
}

function handleScroll() {
  const impactSection = document.querySelector('.impact-section');
  const triggerPoint = impactSection.getBoundingClientRect().top - window.innerHeight + 100;
  if (triggerPoint < 0) {
    counters.forEach(countUp);
    window.removeEventListener('scroll', handleScroll);
  }
}

window.addEventListener('scroll', handleScroll);
