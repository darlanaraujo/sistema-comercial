export const msgAlerta = (tipoAlerta, msg) => {
    if (tipoAlerta === 'erro') {
        txtErro.innerHTML = msg;
        alertaErro.classList.add('active');
        setTimeout(() => {
            alertaErro.classList.remove('active');
        }, 2500);
    } else if (tipoAlerta === 'confirmacao') {
        txtConfirmacao.innerHTML = msg;
        alertaConfirmacao.classList.add('active');
        setTimeout(() => {
            alertaConfirmacao.classList.remove('active');
        }, 2500);
    }
};