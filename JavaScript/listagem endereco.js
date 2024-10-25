const user = JSON.parse(localStorage.getItem("user"));

async function Listar() {
    const api = await fetch("https://go-wash-api.onrender.com/api/auth/address", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${user.access_token}`,
            "Content-Type": "application/json",
        },
    });

    const response = await api.json();
    return response.data;
}

function mostrarEnderecos(address) {
    const listaEnderecos = document.getElementById("lista-enderecos");
    listaEnderecos.innerHTML = ""; 

    address.forEach(response => {
        const linha = document.createElement('tr');
        linha.innerHTML = ` 
            <td>${response.title}</td> 
            <td>${response.address}</td> 
            <td>${response.number}</td> 
            <td>${response.cep}</td>
            <td><a href="atualizar.html?id=${response.id}">Editar</a></td>  
        `;
        listaEnderecos.appendChild(linha);
    });
}

Listar()
    .then(address => {
        mostrarEnderecos(address); 
    })
    .catch(error => {
        console.log('Houve um problema:', error);
    });


