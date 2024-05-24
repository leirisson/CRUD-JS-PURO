import { services } from "../services/services.js";

const table = document.querySelector("[data-tabela]");

services.litsClients()
    .then(data => {
        data.forEach(element => {
            table.appendChild(createNewLine(element.nome, element.email, element.id))
        });
    })

// deleando a linha da com os dados do bando de dados

table.addEventListener('click', (e) => {
    const btn_delete = e.target.className = 'botao-simples botao-simples--excluir';
    if(btn_delete){

        // pegadando o id mais proximo que é o proprio id da linha
        const linha = e.target.closest("[data-id]");
        // pegar id da linha que vai ser excluida
        let  idDalinhaQueVaiSerExcluida = linha.dataset.id;
        // passando o id como parametro para ser deletado
        services.deleteAuser(idDalinhaQueVaiSerExcluida)
        .then(() => {
            // removendo a linha na hora que é apagado, sem isso precisa atualizar a pagina
            linha.remove();
        })

    }
})


const createNewLine = (nome,email, id) => {
    const newLine = document.createElement('tr');
    const conteudo =  `
    <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
`

newLine.innerHTML = conteudo;
newLine.dataset.id = id;
return newLine
}