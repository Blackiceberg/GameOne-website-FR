function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");

// DOM Elements formulaire
const validator = document.querySelector("#inscription");
const errorMessage = document.querySelectorAll(".error");
const errorPrenom = document.querySelector(".prenom");
const errorNom = document.querySelector(".nom");
const errorEmail = document.querySelector(".email");
const errordateDeNaissance = document.querySelector(".dateDeNaissance");
const errornombreDeTournois = document.querySelector(".nombreDeTournois");
const errorTournoi = document.querySelector(".tournoi");
const errorConditionG = document.querySelector(".conditionG");

// Var Elements formulaire
var erreur;
var prenom = document.getElementById("first");
var nom = document.getElementById("last");
var email = document.getElementById("email");
var anniversaire = document.getElementById("birthdate");
var participation = document.getElementById("quantity");
var condition = document.getElementById("checkbox1");






// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
function closeModal() {
  modalbg.style.display = "none";
}

// envoyer formulaire
validator.addEventListener("submit", function(btn) {
  // permet de ne pas rafraichir la page
  btn.preventDefault();
  
// verification des champs


if(!condition.value){
  erreur = "Merci de validé les conditions générales";
}

if(!participation.value){
  erreur = "Veillez renseigner votre nombre de participation";
}
if(!anniversaire.value){
  erreur = "Veillez renseigner votre date de naissance";
}
if(!email.value){
  erreur = "Veillez renseigner un email";
}
if(!nom.value){
  erreur = "Veillez renseigner un nom";
}
if(!prenom.value){
  erreur = "Veillez renseigner un prénom";
}

// affiche message d'erreur 

if (erreur){
  document.getElementById('erreur').innerHTML = erreur;
  return false;

// formulaire validé 
 
} else {
  alert('formulaire envoyer');
}

});
//submit.forEach((input) => input.addEventListener("submit", validator));

