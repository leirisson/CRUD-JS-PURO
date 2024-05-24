
// resgtando dados da API
const obterListaDeClientes = async () => {
    return fetch(`http://localhost:3000/profile`)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.error("Deu ruim na API: ", error);
    })
};

// cadastrando um novo cliente usando POST
const cadastrarNovoCliente = async (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        // passando o verbo HTTP que será usado 
        method: "POST",
        // cabeçalho da drequisição
        headers: {
            'Content-type':'apllication/json'
        },
        // corpo da requisição
        // é preciso converter o objeto json para string para ser enviado 
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(response => {
        return response.body;
    })
    .catch(error => {
        console.error("Deu error ao cadastrar o novo cliente: ", error)
    })
}

export const services = {
    obterListaDeClientes,
    cadastrarNovoCliente
} 