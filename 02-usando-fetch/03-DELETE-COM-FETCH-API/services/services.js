// GET -> pegando todos os cliente scadastrados no banco de dados
const litsClients = async () => {
    return fetch(`http://localhost:3000/profile`)
    .then(response => {
        return response.json()
    })
    .catch(error => {
        console.error("Deu problema ao tentar se conectar na API -> ", error);
    });
}

// POST -> criando um novo registro no banco de dados
const createANewRegister = async (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-type':'apllication/json'
        },
        body: JSON.stringify({
            nome: nome,
            email:email
        })
    })
    .then(response => {
        response.body
    })
}

// DELETE -> excluindo um registro de usuario do banco de dados
const deleteAuser = async(id) =>{
    return fetch(`http://localhost:3000/profile/${id}`,{
        method:'DELETE'
    })
}

// EXPORTANDO O SERVICES

export const services = {
    litsClients,
    createANewRegister,
    deleteAuser
}