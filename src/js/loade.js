const loade = document.querySelector('.fakeLoader');

window.addEventListener('load', () => {
  loade.classList.add('is-open');
  setTimeout(() => {
    loade.remove();
  }, 500);
});
