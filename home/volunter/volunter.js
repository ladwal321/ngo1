document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for signing up as a volunteer!');
  this.reset();
});
