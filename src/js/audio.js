const button = document.querySelector('.audio__icon');
const audio = document.querySelector('audio');

button.addEventListener('click', () => {
  button.classList.toggle('paused');
  audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function () {
  button.classList.contains('paused') ? audio.pause() : audio.play();
};

window.onblur = function () {
  audio.pause();
};
