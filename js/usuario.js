export const setUsuario = (nome, email, senha) => {
    localStorage.setItem('bd-usuario', JSON.stringify({nome: nome, email: email, senha: senha}));
};

export const getUsuario = () => {
    return JSON.parse(localStorage.getItem('bd-usuario')) ?? [];
}

export const dadosUsuario = getUsuario();