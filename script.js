const burger = document.getElementById('burger');
const menu = document.querySelector('header > nav');
const closeButton = document.querySelector('nav i.mobile');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

function slideIn() {
    const blackOverlay = document.createElement('div');
    blackOverlay.style.width = '100vw';
    blackOverlay.style.height = '100%';
    blackOverlay.style.backgroundColor = 'RGBa(0, 0, 0, 0.6)';
    blackOverlay.style.colorBlendMode = 'darken';
    blackOverlay.style.position = 'absolute';
    blackOverlay.style.top = 0;
    blackOverlay.style.left = 0;
    blackOverlay.classList.add('overlay');
    main.appendChild(blackOverlay);
    menu.style.right = 0;
    menu.style.transitionDuration = '0.2s';
}

function slideOut() {
    const blackOverlay = document.querySelector('div.overlay');
    main.removeChild(blackOverlay);
    menu.style.right = '-250px';
    menu.style.transitionDuration = '0.2s';
}

burger.addEventListener('click', slideIn);
closeButton.addEventListener('click', slideOut);
main.addEventListener('click', slideOut);
footer.addEventListener('click', slideOut);