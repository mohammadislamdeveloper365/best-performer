const openMenu = getElement('.best-performer--header-open-menu');
const closeMenu = getElement('.best-performer--header-close-menu');
const mainMenu = getElement('.best-performer--header-main-menu');

addListener(openMenu, 'click', function () {
    mainMenu.style.top = '0';
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
});

addListener(closeMenu, 'click', function () {
    mainMenu.style.top = '-100%';
    closeMenu.style.display = 'none';
    openMenu.style.display = 'flex';
});

function getElement(id) {
    return document.querySelector(id);
}

function addListener(element, eventType, callBack) {
    element.addEventListener(eventType, callBack);
}