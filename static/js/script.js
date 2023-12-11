var fname = document.getElementById("submit_btn")
var messageErreur = document.getElementById("msg_err");

var nomA = document.getElementById("nom")
nomA.addEventListener("input", function() {
    var nom = document.getElementById("nom").value
    if(nom.includes(',') || nom.length < 3 || nom.length > 20){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! Le nom est invalide.";
        fname.disabled = nom.includes(',');
    }else{
        messageErreur.style.display = "none";
        fname.disabled = nom.includes(',');
    }
});

var especeA = document.getElementById("espece")
especeA.addEventListener("input", function() {
    var espece = document.getElementById("espece").value
    if(espece.includes(',')){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! L'espece contient une virgule.";
        fname.disabled = espece.includes(',');
    }else{
        messageErreur.style.display = "none";
        fname.disabled = espece.includes(',');
    }
});

var raceA = document.getElementById("race")
raceA.addEventListener("input", function() {
    var race = document.getElementById("race").value
    if(race.includes(',')){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! La race contient une virgule.";
        fname.disabled = race.includes(',');
    }else{
        messageErreur.style.display = "none";
        fname.disabled = race.includes(',');
    }
});

var ageA = document.getElementById("age")
ageA.addEventListener("input", function() {
    var age = document.getElementById("age").value
    if(age.includes(',') || age < 0 || age > 30){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! L'age est invalide.";
        fname.disabled = age.includes(',');
    }else{
        messageErreur.style.display = "none";
        fname.disabled = age.includes(',');
    }
});

var courrielA = document.getElementById("courriel")
courrielA.addEventListener("input", function() {
    var courriel = document.getElementById("courriel").value
    if(courriel.includes(',') || !isValidEmail(courriel)){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! L'email est invalide.";
        fname.disabled = courriel.includes(',');
    }else{
        messageErreur.style.display = "none";
        fname.disabled = courriel.includes(',');
    }
});

var adresseA = document.getElementById("adresse")
adresseA.addEventListener("input", function() {
    var nom = document.getElementById("adresse").value
    if(nom.includes(',')){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! L'adresse contient une virgule.";
        fname.disabled = nom.includes(',');
    }else{
        messageErreur.style.display = "none";
        fname.disabled = nom.includes(',');
    }
});

var cpA = document.getElementById("cp")
cpA.addEventListener("input", function() {
    var code = document.getElementById("cp").value
    if(code.includes(',') || !isValidCanadianPostalCode(code) ){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! Le code postal Invalide.";
        fname.disabled = code.includes(',');
    }else{
        messageErreur.style.display = "none";
        fname.disabled = code.includes(',');
    }
});

var villeA = document.getElementById("ville")
villeA.addEventListener("input", function() {
    var nom = document.getElementById("ville").value
    if(nom.includes(',')){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! La ville contient une virgule.";
        fname.disabled = nom.includes(',');
    }else{
        messageErreur.style.display = "none";
        fname.disabled = nom.includes(',');
    }
});

var descriptionA = document.getElementById("description")
descriptionA.addEventListener("input", function() {
    var nom = document.getElementById("description").value
    if(nom.includes(',')){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! La description contient une virgule.";
        fname.disabled = nom.includes(',');
    }else{
        messageErreur.style.display = "none";
        fname.disabled = nom.includes(',');
    }
});



var nbrCarNom = document.getElementById("nom")
nbrCarNom.addEventListener("input", function() {
    var nom = document.getElementById("nom").value
    if(nom.length < 3 || nom.length > 20){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! Le nombre de caractère du nom est invalide (NB: min = 3, max = 20).";
        fname.disabled = true;
    }else{
        messageErreur.style.display = "none";
        fname.disabled = false;
    }
});

var maxAge = document.getElementById("age")
maxAge.addEventListener("input", function() {
    var age = document.getElementById("age").value
    if(age < 0 || age > 30){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! L'age est invalide (NB: min = 0, max = 30).";
        fname.disabled = true;
    }else{
        messageErreur.style.display = "none";
        fname.disabled = false;
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidCanadianPostalCode(postalCode) {
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    const postalCodeRegex2 = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
    return (postalCodeRegex.test(postalCode) && postalCode.length == 7 ||
            postalCodeRegex2.test(postalCode) && postalCode.length == 6);
}