const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")

form.addEventListener("submit", (event) => {
    event.preventDefault();

//verificar se nome está vazio
    if(nameInput.value === ""){
        alert("Por favor, digite o seu nome");
        return;
    }

//verifica se o email está preenchido e se é válido
    if(emailInput.value === "") {
        alert("Por favor, digite um email válido");
        return;        
    }


// se os campos de nome e email estiverem preenchidos o formulário pode ser enviado 
    form.submit();

});

