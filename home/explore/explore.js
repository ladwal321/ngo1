document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    alert('Thank you for your interest! More details coming soon.');
  });
});
