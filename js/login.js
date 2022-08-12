// Função que faz o efeito na tela de login;
function initMoveOverlay() {
    const btnOverCadastrar = document.querySelector('#btnOverCadastrar');
    const btnOverEntrar = document.querySelector('#btnOverEntrar');
    const modal = document.querySelector('#modal');

    const moveOverlay = () => {
        modal.classList.toggle('move');
    };
    btnOverCadastrar.addEventListener('click', moveOverlay);


    btnOverEntrar.addEventListener('click', moveOverlay);
}
initMoveOverlay();

// ==========================================================================


const setBancoLogin = (dados) => {
    localStorage.setItem('bd-login', JSON.stringify(dados));
};

const getBancoLogin = () => {
    return JSON.parse(localStorage.getItem('bd-login')) ?? [];
}

const setLogin = (nome, email, senha) => {
    dadosLogin.unshift({nome: nome, email: email, senha: senha});

    setBancoLogin(dadosLogin);
};

const modalAlerta = document.querySelector('#modalAlerta');
const btnCadastrar = document.querySelector('#btnCadastrar');
const txtNome = document.querySelector('#txtNome');
const txtEmail = document.querySelector('#txtEmail');
const txtSenha = document.querySelector('#txtSenha');

const dadosLogin = getBancoLogin();

const limpaInput = () => {
    txtNome.value = '';
    txtEmail.value = '';
    txtSenha.value = '';
};

const verificaCadastro = () => {
    const nome = txtNome.value;
    const email = txtEmail.value;
    const senha = txtSenha.value;

    if(nome === '' || email === '' || senha === '') {
        modalAlerta.classList.add('active');
    } else {
        limpaInput();
    
        setLogin(nome, email, senha);
    }

};
btnCadastrar.addEventListener('click', verificaCadastro);


