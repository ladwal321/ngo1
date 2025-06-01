// donate.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('donate-form');
  const successMsg = document.querySelector('.success-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    successMsg.textContent = '🎉 Thank you for your generous donation!';
    successMsg.style.display = 'block';
    successMsg.style.opacity = 0;

    let opacity = 0;
    const fadeIn = setInterval(() => {
      opacity += 0.05;
      successMsg.style.opacity = opacity;
      if (opacity >= 1) clearInterval(fadeIn);
    }, 20);

    form.reset();

    // Hide after 4s
    setTimeout(() => {
      let fadeOut = 1;
      const hide = setInterval(() => {
        fadeOut -= 0.05;
        successMsg.style.opacity = fadeOut;
        if (fadeOut <= 0) {
          successMsg.style.display = 'none';
          clearInterval(hide);
        }
      }, 30);
    }, 4000);
  });
});
