const menu = document.querySelector('.fullscreen-menu');
const burger = document.querySelector('.hamburger');
const close = document.querySelector('.fullscreen-menu__close');
const items = document.querySelectorAll('.fullscreen-menu__item');

burger.addEventListener('click', () => {
  event.preventDefault();
  menu.classList.add('open');
});

close.addEventListener('click', () => {
  event.preventDefault();
  menu.classList.remove('open');
});

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', () => {
    event.preventDefault();
    menu.classList.remove('open');
  });
}