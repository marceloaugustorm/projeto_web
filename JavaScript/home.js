const url = "https://go-wash-api.onrender.com/api/user";
const token = localStorage.getItem('user');

if (!token) {
    alert("Faça login para prosseguir.");
    window.location.replace("login.html"); 
}

async function cadastreEndereco() {
    window.location.href = "endereco.html";
}

async function listagemEndereco() {
    window.location.href = "listagem endereco.html";
}

async function logout() {
    localStorage.clear();  
    alert("Logout bem-sucedido.");
    window.location.replace("login.html");
}
