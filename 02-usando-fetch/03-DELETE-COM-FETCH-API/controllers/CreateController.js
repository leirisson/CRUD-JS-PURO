import { services } from "../services/services.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = e.target.querySelector("[data-nome]").value;
    const email = e.target.querySelector("[data-email]").value

    services.createANewRegister(nome, email)
    .then(() => {
        window.location.href = '../pages/listaDeClientes.html';
    })
})