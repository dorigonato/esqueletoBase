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

function tipo_rastreio() {
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

function rastrear(){
  var codigoRastreio = document.querySelector("#numero-rastreamento-pedido").value;
  var dadosPedido = document.querySelector(".pedido");
  var footer = document.querySelector('footer');
  if (codigoRastreio == "123") {
    dadosPedido.innerHTML = "<h2>Detalhes do Pedido:</h2><ul>    <li>Número de pedido: 123456.</li><br><li>Data de Compra: 20 de novembro de 2023.</li><br><li>Endereço de entrega: Rua João da Silva, N° 1030 - Centro - Cuiabá - MT.</li><br><li>Status de entrega: Saiu para entrega.</li></ul>"
    footer.classList.add("rastreio");
    }
  else if (codigoRastreio == "") {
    dadosPedido.innerHTML = "<h2>Número não preenchido!";
    footer.classList.remove("rastreio");
  }
  else{
    dadosPedido.innerHTML = "<h2>Pedido não encontrado!</h2>";
    footer.classList.remove("rastreio");
  }
}

function checkbox(){
  var checkbox0 = document.querySelector("#checkbox0").checked;
  var checkbox1 = document.querySelector("#checkbox1");
  var checkbox2 = document.querySelector("#checkbox2");
  var checkbox3 = document.querySelector("#checkbox3");
  var subtotal = document.querySelector("#subtotal");
  if (checkbox0) {
    subtotal.innerHTML = "R$ 150,00";
    checkbox1.checked = true;
    checkbox2.checked = true;
    checkbox3.checked = true;
  }
  if ((checkbox1.checked) && (checkbox2.checked) && (checkbox3.checked)) {
    subtotal.innerHTML = "R$ 150,00";
  }
  else if ((checkbox1.checked) && (checkbox2.checked)) {
    subtotal.innerHTML = "R$ 90,00";
  }
  else if ((checkbox2.checked) && (checkbox3.checked)) {
    subtotal.innerHTML = "R$ 110,00";
  }
  else if ((checkbox1.checked) && (checkbox3.checked)) {
    subtotal.innerHTML = "R$ 100,00";
  }
  else if (checkbox1.checked){
    subtotal.innerHTML = "R$ 40,00";
  }
  else if (checkbox2.checked){
    subtotal.innerHTML = "R$ 50,00";
  }
  else if (checkbox3.checked){
    subtotal.innerHTML = "R$ 60,00";
  }
  if ((checkbox1.checked == false) && (checkbox2.checked == false) && (checkbox3.checked == false)) {
    subtotal.innerHTML = "R$ 0,00";
  }
}