import { services } from "../services/services.js";

const tabelDeClientes = document.querySelector("[data-tabela]");


services.obterListaDeClientes()
    .then(dadosClientes => {
        dadosClientes.forEach(data => {
            tabelDeClientes.appendChild(criarNovaLinhaNaTabela(data.nome, data.email))
        });
    })



const criarNovaLinhaNaTabela = (nome, email) =>{
    const novaLinha = document.createElement('tr');
    const conteudo  = `    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
<ul class="tabela__botoes-controle">
<li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
<li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
</ul>
</td>
`

novaLinha.innerHTML = conteudo;
return novaLinha
}