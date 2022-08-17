const btnMenuBar = document.querySelector('#btnMenuBar');
const colunaMenu = document.querySelector('#colunaMenu');

const minimizeMenu = () => {
    colunaMenu.classList.toggle('minimize');
};
btnMenuBar.addEventListener('click', minimizeMenu);