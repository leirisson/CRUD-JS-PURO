import { services } from "../services/services.js";


const formularioDeCadastro = document.querySelector('[data-form]');


formularioDeCadastro.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = e.target.querySelector('[data-nome]').value;
    const email = e.target.querySelector('[data-email]').value;

    services.cadastrarNovoCliente(nome, email)
        .then(() => {
            alert("Usuario cadastrado com sucesso !");
            window.location.href = '../pages/listaDeClientes.html';
        });

})

