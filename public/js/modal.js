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
const locations = document.querySelector('#location');
const conditionU = document.querySelector('#conditionU');



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


const isValidEmail = email => {
  const re = /^[a-zA-Z0-9._-]{1,64}@([a-zA-Z0-9-]{2,252}\.[a-zA-Z.]{2,6}){5,255}$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const prenomValue = prenom.value.trim();
  const nomValue = nom.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();
 // const locationsValue = locations.value.trim();
  const conditionUValue = conditionU.value.trim();

  if(!prenomValue){
    setErreur(prenom, "Le champ Prénom a un minimum de 2 caractères")
  }else{
    setSuccess(prenom);
  }
  if(!nomValue){
    setErreur(nom, "Le champ du nom de famille a un minimum de 2 caractères")
  }else{
    setSuccess(nom);
  }

    if(emailValue ===''){
      setErreur(email, "renseigner votre adresse");
    }else if (!isValidEmail(emailValue)){
      setErreur(email,"L'adresse électronique n'est pas valide.")
    }else{
      setSuccess(email);
    }
}




