const setUsuario = (nome, email, senha) => {
    localStorage.setItem('bd-usuario', JSON.stringify({nome: nome, email: email, senha: senha}));
};

const getUsuario = () => {
    return JSON.parse(localStorage.getItem('bd-usuario')) ?? [];
}

const dadosUsuario = getUsuario();