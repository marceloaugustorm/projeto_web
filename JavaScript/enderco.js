const url = 'https://go-wash-api.onrender.com/api/auth/address' 

async function cadastrar(){
    let moradia = document.getElementById('moradia').value
    let CEP = document.getElementById('CEP').value
    let endereco = document.getElementById('endereco').value
    let numero = document.getElementById('numero').value
    let complemento = document.getElementById('complemento').value


    if(!moradia){
        return alert("Campo moradia obrigatório.")
    }

    if(!CEP){
        return alert("Campo CEP obrigatório.")
    }

    if(!endereco){
        return alert("Campo endereço obrigatório.")
    }

    if(!numero){
        return alert("Campo número obrigatório.")

    }
    
    if(!complemento){
        return alert("Campo complemento obrigatório.")
    }


    let api = await fetch(url,{
        method: "POST",
        body: JSON.stringify(
        {
            "moradia": moradia,
            "CEP": CEP,
            "endereco": endereco,
            "numero": numero,
            "complemento": complemento,
        }    
        ),

        headers:{
            'Content-Type':'application/json'
        }

    })

    if(api.ok){
        let resposta = await api.json();
        localStorage.setItem("user", JSON.stringify(resposta));
        return alert("Endereço cadastrado.")
    }

    let respostaErro = await api.json();
        alert(respostaErro.data.errors)
}