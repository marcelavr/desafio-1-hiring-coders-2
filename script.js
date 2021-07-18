function formatoEmail(inputText) {
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(inputText.value.match(mailformat)) {      
        cadastrarEmail();
    }
    else
    {      
        console.log("Email inválido.")
    }
}


function cadastroEmail() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let aceita = document.getElementById('checkbox').checked;

    if ((nome != null && nome != "") && (email != null && email != "")) {
        
        let data = {
            nome,
            email,
            aceita,
        }
    
        let convertData = JSON.stringify(data);
    
        localStorage.setItem('lead', convertData);
    
        alert("Cadastramos seu e-mail com sucesso!");

    }else{
        console.log("Opa, acho que faltou alguma coisa!")
    }

}