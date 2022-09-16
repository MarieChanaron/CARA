const burger = document.getElementById('burger');
const menu = document.querySelector('header > nav');
const closeButton = document.querySelector('nav i.mobile');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

function slideIn() {
    menu.style.right = 0;
    menu.style.transitionDuration = '0.2s';
}

function slideOut() {
    menu.style.right = '-40vw';
    menu.style.transitionDuration = '0.2s';
}

burger.addEventListener('click', slideIn);
closeButton.addEventListener('click', slideOut);
main.addEventListener('click', slideOut);
footer.addEventListener('click', slideOut);