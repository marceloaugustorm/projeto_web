const url = "https://go-wash-api.onrender.com/api/login"

async function login() {
    

let email = document.getElementById('email').value
let senha = document.getElementById('senha').value

if(!email){
    return alert("O campo email é obrigatório.")
}

if(!senha){
    return alert("O campo senha é obrigatório.")
}

 

  let api = await fetch(url,{  
    method:"POST",
    body:JSON.stringify(
        {
            "email":email,
            "user_type_id":1,
            "password":senha,   
        }
    ),
    headers:{
      'Content-Type':'application/json'

    }

  })  
 
  if(api.ok){
    let resposta = await api.json();
    localStorage.setItem("user", JSON.stringify(resposta));
    window.location.href = "home.html";
}

  let respostaErro = await api.json();

     alert(respostaErro.data.errors)
      
}
