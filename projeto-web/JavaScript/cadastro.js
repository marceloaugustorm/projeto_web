const url = "https://go-wash-api.onrender.com/api/user"
async function cadastroUsuario(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let cpf_cnpj = document.getElementById('cpf_cnpj').value
    let termos = document.getElementById('termos').checked
    let aniversario = document.getElementById('aniversario').value
    
    if(!name){
        alert('Nome obrigatório.')
        return 
    }
    if(!senha){
        alert('Senha obrigatória.')
        return
    }

    if(!termos){
        alert('Termos Obrigatório.')
        return
    }

    if(!aniversario){
        alert('Coloque a data de aniversário.')
        return
    }

    if(!cpf_cnpj){
        alert('CPF/CNPJ obrigatório.')
        return
    }


    const resposta = await fetch(url,{  
        method:"POST",
        body:JSON.stringify(
            {
                "name":name,
                "email":email,
                "user_type_id":1,
                "password":senha,
                "cpf_cnpj":cpf_cnpj,
                "terms": termos,
                "birthday":aniversario,   
            }
        ),
        headers:{
            'Content-Type':'application/json'
        }

    })

    const resultado = await resposta.json(); 

    if(resposta.ok){

        alert('Cadastro conluido.')

        return 
        
    }
    if (resultado?.data?.errors) { 
        const errors = resultado.data.errors;

    if(errors === "cpf_cnpj invalid"){
        return alert("CPF ou CNPJ invalido.")
    }else if(resultado.data.errors.email[0]){
        return alert("Email usado ou não existe.")
    }
}
    

 }