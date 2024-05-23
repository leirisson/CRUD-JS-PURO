const tabelaCliente  = document.querySelector("[data-tabela]");



const BuscarClientesNoBanco = async () => {
    return fetch("http://localhost:3000/profile")
    .then(response => {
        return response.json()
    })
    .catch(error => {
        console.error("Deu ruim na API ", error);
    })
};

BuscarClientesNoBanco()
    .then(dadosDoCliente => {
        dadosDoCliente.forEach(dataCliente => {
                   tabelaCliente.appendChild(criarLinhaNaTabelaDeCliente(dataCliente.nome, dataCliente.email))
        })
    }
)

const criarLinhaNaTabelaDeCliente = (nome, email) => {
    const NovaLinha = document.createElement('tr');
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
    NovaLinha.innerHTML = conteudo;
    return NovaLinha;
}