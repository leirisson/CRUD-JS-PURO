const tabela = document.querySelector("[data-tabela]");


const BuscarListaDeClientes = () => {
    // criando uma promeça 
    const promisse = new Promise((resolve, reject) => {
        const conexaoHttp = new XMLHttpRequest();

        conexaoHttp.open('GET', 'http://localhost:3000/profile');
       
        conexaoHttp.onload = () => {
            if (conexaoHttp.status >= 400) {
                reject(JSON.parse(conexaoHttp.response))
            } else {
                resolve(JSON.parse(conexaoHttp.response))
            }
        }
        // enviando a resposta
        conexaoHttp.send();
    })

    return promisse;
}

BuscarListaDeClientes()
    .then(dadosCliente => {
        dadosCliente.forEach(element => {
            tabela.appendChild(criarNovaLinha(element.nome, element.email))
        });
    })




const criarNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr');
    const conteudo = `
    <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
`
    linhaNovoCliente.innerHTML = conteudo;
    return linhaNovoCliente;
}
