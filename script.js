// Scroll to the timeline section when the button is clicked
document.querySelector('.button').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#timeline').scrollIntoView({ behavior: 'smooth' });
  });