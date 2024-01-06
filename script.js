const toggleMenu = document.querySelector('.toggle-menu-btn');
const menu = document.querySelector('.dark-overlay');

toggleMenu.addEventListener('click', function () {

    // if (toggleMenu.src === './images/icon-hamburger.svg') {
    //     toggleMenu.src = './images/icon-close.svg'
    // } else {
    //     toggleMenu.src = './images/icon-hamburger.svg'
    // }
    toggleMenu.classList.toggle('active')
    menu.classList.toggle('open-menu');
} )