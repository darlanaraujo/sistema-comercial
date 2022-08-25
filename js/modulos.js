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

export const erroInput = (msg) => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {

        if(input.hasAttribute('required')){

            if(input.value === '') {
                msgAlerta('erro', msg);
                input.classList.add('erro');
    
                setTimeout(() => {
                    input.classList.remove('erro');
                }, 2000);
            } else if (! input.validity.valid) {
                msgAlerta('erro', msg);
                input.classList.add('erro');
    
                setTimeout(() => {
                    input.classList.remove('erro');
                }, 2000);
            }
        }

    });
}