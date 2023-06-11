const btnOpen = document.querySelector('.btn-open');
const btnClouse = document.querySelector('.btn-clouse');
const firstElementMenu = document.querySelector('.about');
const secondElementMenu = document.querySelector('.services');
const thirdElementMenu = document.querySelector('.projects');
const fourthElementMenu = document.querySelector('.contact');

btnOpen.addEventListener('click', openMenu);
btnClouse.addEventListener('click', clouseMenu);

function openMenu() {
  btnOpen.classList.add('is-hidden');
  btnClouse.classList.remove('is-hidden');
  firstElementMenu.classList.remove('is-hidden');
  secondElementMenu.classList.remove('is-hidden');
  thirdElementMenu.classList.remove('is-hidden');
  fourthElementMenu.classList.remove('is-hidden');
}

function clouseMenu() {
  btnOpen.classList.remove('is-hidden');
  btnClouse.classList.add('is-hidden');
  firstElementMenu.classList.add('is-hidden');
  secondElementMenu.classList.add('is-hidden');
  thirdElementMenu.classList.add('is-hidden');
  fourthElementMenu.classList.add('is-hidden');
}
