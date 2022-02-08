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


// DOM Elements formulaire
const form = document.querySelector('#form');
const prenom = document.querySelector('#prenom');
const nom = document.querySelector('#nom');
const email = document.querySelector('#email');
const birthdate = document.querySelector('#birthdate');
const quantity = document.querySelector('#quantity');
const conditionU = document.querySelector('#conditionU');
const locations = document.querySelectorAll('[name="location"]:checked');

//Regex
const regexNomPrenom = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]{2,}$/;
const regexEmail = /\S+@\S+\.\S+/;
const regexQuantity = /^[1-9]?[0-9]{1,2}$/;



// Messages d'erreurs
const ErreurPrenom = "Le champ Prénom a un minimum de 2 caractères";
const ErreurNom = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const ErreurEmail = "L'adresse électronique n'est pas valide.";
const ErreurBirthdate = "Vous devez entrer votre date de naissance.";
const ErreurQuantity ="Vous devez entrer votre nombre de participation.";
const ErreurLocations ="Vous devez choisir une ville.";
const ErreurConditionU = "Vous devez vérifier que vous acceptez les termes et conditions.";


form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setErreur = (element, message) => {
  const inputControl = element.parentElement;
  const erreurDisplay = inputControl.querySelector('.erreur');

  erreurDisplay.innerText = message;
  inputControl.classList.add('erreur');
  inputControl.classList.remove('success');
}
const setSuccess = element => {
  const inputControl = element.parentElement;
  const erreurDisplay = inputControl.querySelector('.erreur');
  erreurDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('erreur');
};


const isValidPrenom = prenom =>{
  return regexNomPrenom.test(String(prenom).toLowerCase());
}
const isValidNom = nom =>{
  return regexNomPrenom.test(String(nom).toLowerCase());
}
const isValidEmail = email => {
  return regexEmail.test(String(email).toLowerCase());
}

const isValidQuantity = quantity => {
  return regexQuantity.test(String(quantity).toLowerCase());
}

const validateInputs = () => {
  const prenomValue = prenom.value.trim();
  const nomValue = nom.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();
  const locationsValue = locations.value;
  const conditionUValue = conditionU.checked;
  const quantityValue = quantity.value.trim();
  
  

  if(!isValidPrenom (prenomValue)){
    setErreur(prenom, ErreurPrenom)
  }else{
    setSuccess(prenom);
  }
  if(!isValidNom(nomValue)){
    setErreur(nom, ErreurNom)
  }else{
    setSuccess(nom);
  }
  if(!isValidEmail(emailValue)){
    setErreur(email, ErreurEmail)
  }else{
    setSuccess(email);
  }
  if (!birthdateValue){
    setErreur(birthdate, ErreurBirthdate)
  }else{
    setSuccess(birthdate);
  }
  if (!isValidQuantity(quantityValue)){
    setErreur(quantity, ErreurQuantity)
  }else{
    setSuccess(quantity);
  }

  if (conditionUValue == false){
    setErreur(conditionU, ErreurConditionU)
  }else{
    setSuccess(conditionU);   
  }
  if (locationsValue == false){
    setErreur(locations,ErreurLocations)
  }else{
    setSuccess(locations);    
  }
}



