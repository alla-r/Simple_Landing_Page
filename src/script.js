const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const icon1 = document.querySelector('.fa-bars');
const icon2 = document.querySelector('.fa-hamburger');

// Toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
  icon1.classList.toggle('hidden');
  icon2.classList.toggle('hidden');
});

open.addEventListener('click', () => {
  modal.classList.add('show-modal');
});

// Hide modal
close.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

// Hide modal on outside click
window.addEventListener('click', (e) => {
  e.target == modal ? modal.classList.remove('show-modal') : false;
});
