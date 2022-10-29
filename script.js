const navOpen = document.querySelector('.nav-open');
const navClose = document.querySelector('.nav-close');
const nav = document.querySelector('.primary-nav');

navOpen.addEventListener('click', () => {
    nav.setAttribute('data-visible', true);
})
navClose.addEventListener('click', () => {
    nav.setAttribute('data-visible', false);
})