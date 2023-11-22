const mobileMenu = document.querySelector(".mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    navList.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => 
n.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  navList.classList.remove("active");
}))

function validarEmail(){
  var email = document.querySelector('#email');
  var error = document.querySelector('#error-email');
  var loginEmail = document.querySelector(".femail");

  if(!email.checkValidity()){
    error.innerHTML = "Email invalido";
    loginEmail.classList.add("erro");
  }   
}

function redefinirMsg(){
  var error = document.querySelector('#error-email');
  var loginEmail = document.querySelector(".femail");
  if (error.innerHTML == "Email invalido"){
    error.innerHTML = "";
    loginEmail.classList.remove("erro");
  }
}

function validateForm() {
  let email = document.forms["login"]["email"].value;
  var errorEmail = document.querySelector('#error-email');
  var loginEmail = document.querySelector(".femail");
  if (email == "") {
    loginEmail.classList.add("erro");
    errorEmail.innerHTML = "Email invalido";
    return false;
  } 
  else {
    loginEmail.classList.remove("erro");
  }
}

function rastrear() {
  var tipoRastreio = document.querySelector('#tipo-rastreamento');
  var option = tipoRastreio.value;
  var labelRastreio = document.querySelector('#label-rastreamento');
  if (option == "numero-rastreamento") {
    labelRastreio.innerHTML = "Número do rastreio:";
  }
  if (option == "numero-pedido") {
    labelRastreio.innerHTML = "Número do pedido:";
  } 
}