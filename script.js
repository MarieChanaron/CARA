const burger = document.getElementById('burger');
const menu = document.querySelector('header > nav');
const closeButton = document.querySelector('nav i.mobile');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const overlayColor = 'RGBa(0, 0, 0, 0.5)';
const duration = '0.2s';


function slideIn() {

    const blackOverlay1 = document.createElement('div');
    blackOverlay1.style.width = main.clientWidth + 'px';
    blackOverlay1.style.height = document.querySelector('body').clientHeight + 'px';
    blackOverlay1.style.backgroundColor = overlayColor;
    blackOverlay1.style.colorBlendMode = 'darken';
    blackOverlay1.style.position = 'absolute';
    blackOverlay1.style.left = 0;
    blackOverlay1.style.top = 0;
    blackOverlay1.classList.add('overlay1');
    main.appendChild(blackOverlay1);

    const blackOverlay2 = document.createElement('div');
    blackOverlay2.style.width = '100%';
    blackOverlay2.style.height = '100%';
    blackOverlay2.style.backgroundColor = overlayColor;
    blackOverlay2.style.colorBlendMode = 'darken';
    blackOverlay2.style.position = 'absolute';
    blackOverlay2.style.left = 0;
    blackOverlay2.style.bottom = 0;
    blackOverlay2.classList.add('overlay2');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    header.insertBefore(blackOverlay2, nav);

    menu.style.right = 0;
    menu.style.transitionDuration = duration;
    
}

function slideOut() {

    const blackOverlay1 = document.querySelector('div.overlay1');
    const blackOverlay2 = document.querySelector('div.overlay2');
    blackOverlay1.remove();
    blackOverlay2.remove();
    menu.style.right = '-250px';
    menu.style.transitionDuration = duration;

}

burger.addEventListener('click', slideIn);
closeButton.addEventListener('click', slideOut);
main.addEventListener('click', slideOut);
footer.addEventListener('click', slideOut);