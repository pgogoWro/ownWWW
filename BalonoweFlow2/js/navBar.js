const hidden = document.querySelector('.hidden');
const navLink = document.querySelector('.linkNav');

hidden.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});