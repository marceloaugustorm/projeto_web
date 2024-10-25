document.addEventListener('DOMContentLoaded', () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const addressId = urlParams.get('id');

    if (addressId) {
        document.getElementById('addressId').value = addressId;

        fetch(`https://go-wash-api.onrender.com/api/auth/address/${addressId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).access_token}`,
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                document.getElementById('newTitle').value = data.title;
                document.getElementById('newAddress').value = data.address;
                document.getElementById('newNumber').value = data.number;
                document.getElementById('newCep').value = data.cep;
            }
        })
        .catch(error => console.error('Erro ao carregar os dados do endereço:', error));
    } else {
        alert('ID do endereço não encontrado na URL.');
    }
});

async function Atualizar() {
    const addressId = document.getElementById('addressId').value;
    const updatedData = {
        title: document.getElementById('newTitle').value,
        address: document.getElementById('newAddress').value,
        number: document.getElementById('newNumber').value,
        cep: document.getElementById('newCep').value,
    };

    try {
        const response = await fetch(`https://go-wash-api.onrender.com/api/auth/address/${addressId}`, {
            method: "POST", 
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).access_token}`,
                'Content-Type': "application/json",
            },
            body: JSON.stringify(updatedData),
        });

        alert('Endereço atualizado com sucesso!');
        window.location.href = 'listagem endereco.html'; 

    } catch (error) {
        console.error('Erro ao atualizar o endereço:', error);
        alert(`Falha ao atualizar. Detalhes do erro: ${error.message}`);
    }
}
