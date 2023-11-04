const mobileMenu = document.querySelector(".mobile-menu");
const navList = document.querySelector(".nav-list");
const contatoNome = document.querySelector(".nome");
const contatoComentario = document.querySelector(".comentario");

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    navList.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => 
n.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  navList.classList.remove("active");
}))

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function validarEmail(){
  var email = document.querySelector('#email');
  var error = document.querySelector('#error-email');
  
  if(!email.checkValidity()){
    error.innerHTML = "Email invalido";  
  }
   
}

function redefinirMsg(){
  var error = document.querySelector('#error-email');
  if (error.innerHTML == "Email invalido"){
    error.innerHTML = "";
  }
}

function validateForm() {
  let nome = document.forms["contato"]["fnome"].value;
  let comentario = document.forms["contato"]["fcomentario"].value;
  var errorNome = document.querySelector('#error-nome');
  var errorComentario = document.querySelector('#error-comentario');
  if (nome == "") {
    contatoNome.classList.add("erro");
    errorNome.innerHTML = "Preencha este campo";
  } 
  else {
    contatoNome.classList.remove("erro");
  }
  if (comentario == "") {
    contatoComentario.classList.add("erro");
    errorComentario.innerHTML = "Preencha este campo";
    return false;
  } 
  else {
    contatoComentario.classList.remove("erro");
  }

}