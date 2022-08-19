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

// BANCO DE DADOS DE TODOS OS CADASTRADOS NO LOGIN;

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
const dadosLogin = getBancoLogin();

// Modal de Alertas
const alertaErro = document.querySelector('#alertaErro');
const alertaConfirmacao = document.querySelector('#alertaConfirmacao');
const txtErro = document.querySelector('#txtErro');
const txtConfirmacao = document.querySelector('#txtConfirmacao');

// Botões
const btnCadastrar = document.querySelector('#btnCadastrar');
const btnEntrar = document.querySelector('#btnEntrar');

// Input de saída de dados
const txtSetNome = document.querySelector('#txtSetNome');
const txtSetEmail = document.querySelector('#txtSetEmail');
const txtSetSenha = document.querySelector('#txtSetSenha');

// Input de entrada de dados
const txtGetEmail = document.querySelector('#txtGetEmail');
const txtGetSenha = document.querySelector('#txtGetSenha');


const limpaInput = () => {
    txtSetNome.value = '';
    txtSetEmail.value = '';
    txtSetSenha.value = '';

    txtGetEmail.value = '';
    txtGetSenha.value = '';
};

const msgAlerta = (tipoAlerta, msg) => {
    if(tipoAlerta === 'erro') {
        txtErro.innerHTML = msg;
        alertaErro.classList.add('active');
        setTimeout(() => {
            alertaErro.classList.remove('active');
        }, 2500);
    } else if(tipoAlerta === 'confirmacao') {
        txtConfirmacao.innerHTML = msg;
        alertaConfirmacao.classList.add('active');
        setTimeout(() => {
            alertaConfirmacao.classList.remove('active');
        }, 2500);
    }
};

const cadastrarUsuario = () => {
    const nome = txtSetNome.value;
    const email = txtSetEmail.value;
    const senha = txtSetSenha.value;

    if(nome === '' || email === '' || senha === '') {
        msgAlerta('erro', 'Preencha todos os dados...');
    } else {
        limpaInput();
        msgAlerta('confirmacao', 'Cadastro feito com sucesso...');
    
        setLogin(nome, email, senha);
    }

};
btnCadastrar.addEventListener('click', cadastrarUsuario);
txtSetSenha.addEventListener('keydown', ({key}) => {
    if(key === 'Enter') {
        if(txtSetNome != '' && txtSetEmail != '' && txtSetSenha != '') {
            cadastrarUsuario();
        } else {
            msgAlerta('erro', 'Preencha todos os dados...');
        }
    }
});

const verificaCadastro = () => {
    const getEmail = txtGetEmail.value;
    const getSenha = txtGetSenha.value;
    
    dadosLogin.forEach((dados) => {
        let nome = dados.nome;
        let email = dados.email;
        let senha = dados.senha;

        if (getEmail === '' || getSenha === '') {
            msgAlerta('erro', 'Preencha todos os dados...');
        } else {
            if(getEmail === email && getSenha === senha) {
                // Guarda os dados do usuário para proxima tela;
                setUsuario(nome, email, senha);
                
                limpaInput()
                confirmacao = false;
                msgAlerta('confirmacao', 'Login confirmado com sucesso...');
                
                setTimeout(() => {
                    window.location.href = './painel.html';
                }, 2000);
            } else {
                msgAlerta('erro', 'Usuário invalido...');
            }
        }

    });
};
btnEntrar.addEventListener('click', verificaCadastro)

txtGetSenha.addEventListener('keydown', ( {key} ) => {
    const getEmail = txtGetEmail.value;
    const getSenha = txtGetSenha.value;

    if(key === 'Enter') {
        if(getEmail != '' && getSenha != '') {
            verificaCadastro();
        } else {
            msgAlerta('erro', 'Preencha todos os dados...');
        }
    }
});