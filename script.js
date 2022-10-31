const navOpen = document.querySelector('.nav-open');
const navClose = document.querySelector('.nav-close');
const nav = document.querySelector('.primary-nav');
const header = document.querySelector('.primary-header')

navOpen.addEventListener('click', () => {
    nav.setAttribute('data-visible', true);
})
navClose.addEventListener('click', () => {
    nav.setAttribute('data-visible', false);
})

window.addEventListener('scroll', () => {
    if (window.scrollY > header.offsetTop) {
        document.body.style.paddingTop = `${header.offsetHeight}px`
        // nav.classList.add('sticky')
        header.classList.add('sticky')
    } else {
        document.body.style.paddingTop = '0'
        // nav.classList.remove('sticky')
        header.classList.remove('sticky')
    }
})