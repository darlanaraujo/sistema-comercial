import { msgAlerta } from './modulos.js';
import { setUsuario } from './usuario.js';
import { dadosUsuario } from './usuario.js';

// ==================== DADOS DO USUÁRIO ====================
const nomeUsuario = dadosUsuario.nome;
const emailUsuario = dadosUsuario.email;
const senhaUsuario = dadosUsuario.senha;

let teste = 'darlan';
teste.toUpperCase
// ==================== VALIDA ACESSO ====================

const validaAcesso = () => {
    const main = document.querySelector('#main');

    if (nomeUsuario === undefined || nomeUsuario === '') {
        main.classList.remove('active');
        window.location.href = 'index.html';
    } else {
        main.classList.add('active');
    }
};
validaAcesso();

// ==================== PAINEL CABEÇÃLHO ====================
const txtNomeUsuario = document.querySelector('#txtNomeUsuario');

txtNomeUsuario.innerHTML = nomeUsuario;

// ==================== MENU BAR ====================
const btnMenuBar = document.querySelector('#btnMenuBar');
const colunaMenu = document.querySelector('#colunaMenu');

const minimizeMenu = () => {
    colunaMenu.classList.toggle('minimize');
};
btnMenuBar.addEventListener('click', minimizeMenu);

// ==================== MENU BAR PAINEL ====================
const btnMenuBarPainel = document.querySelector('#btnMenuBarPainel');
const colunaPainel = document.querySelector('#colunaPainel');

const minimizePainel = () => {
    colunaPainel.classList.toggle('minimize');
};
btnMenuBarPainel.addEventListener('click', minimizePainel);

// ==================== TITULO DA PÁGINA ====================
const txtTitulo = document.querySelector('#txtTitulo');
const titulos = {
    0: 'Dashboard',
    1: 'Clientes',
    2: 'Categorias',
    3: 'Produtos',
    4: 'Fornecedores',
    5: 'Relatórios',
    6: 'Meus Dados',
    7: 'Configurações'
}


// ==================== MENU PRINCIPAL ====================
const btnMenus = document.querySelectorAll('#btnMenu')
const paginas = document.querySelectorAll('#pagina');

btnMenus.forEach((menu, index) => {

    menu.addEventListener('click', ({ target }) => {
        // Limpa a ativação do menu;
        btnMenus.forEach((menu) => {
            menu.classList.remove('active');
        });

        // Ativa o menu selecionado;
        menu.classList.add('active');

        // Limpa a ativação da página;
        paginas.forEach((pagina) => {
            pagina.classList.remove('active');
        });

        // Ativa a página selecionada e o titulo
        paginas[index].classList.add('active');

        txtTitulo.classList.remove('active')
        setTimeout(() => {
            txtTitulo.classList.add('active')
            txtTitulo.innerHTML = titulos[index];
        }, 1000);
    });
});

// ==================== SAIR DO PAINEL ====================
const btnSair = document.querySelector('#btnSair');

const logout = () => {
    msgAlerta('confirmacao', 'Saindo do sistema...');

    setTimeout(() => {
        setUsuario('', '', '');
        window.location.href = 'index.html';
    }, 2000);
};
btnSair.addEventListener('click', logout);

// ==================== PÁGINA MEUS DADOS ====================
const txNomeUsuario = document.querySelector('#txNomeUsuario');
const txEmailUsuario = document.querySelector('#txEmailUsuario');
const txSenhaUsuario = document.querySelector('#txSenhaUsuario');

txNomeUsuario.innerHTML = nomeUsuario;
txEmailUsuario.innerHTML = emailUsuario;
txSenhaUsuario.innerHTML = senhaUsuario;