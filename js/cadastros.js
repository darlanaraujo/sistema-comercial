// ACESSO AO BD ==============================================================
const setBancoCadastros = (banco, dados) => {
    localStorage.setItem('banco', JSON.stringify(dados));
};

const getBancoCadastros = (banco) => {
    JSON.parse(localStorage.getItem(banco)) ?? [];
};

// ACESSO AO DOM ==============================================================
const btnCadastrarCliente = document.querySelector('#btnCadastrarCliente');
const modal = document.querySelector('#modal');
const janelaCadastro = document.querySelectorAll('.janela-cadastro');
const janelaCliente = document.querySelector('#janelaCliente');
const btnCancelar = document.querySelector('#btnCancelar');

const getModal = (janela) => {
    modal.classList.add('active');
    janela.classList.add('active');
};
btnCadastrarCliente.addEventListener('click', () => {
    getModal(janelaCliente);
});

const closeModal = () => {
    modal.classList.remove('active');
    janelaCadastro.forEach((janela) => {
        janela.classList.remove('active');
    });
};
btnCancelar.addEventListener('click', closeModal);