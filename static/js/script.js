var fname = document.getElementById("submit_btn")
var messageErreur = document.getElementById("msg_err");

var nomA = document.getElementById("nom")
nomA.addEventListener("input", function() {
    var nom = document.getElementById("nom").value
    if(nom.includes(',')){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! Le nom contient une virgule.";
        fname.disabled = nom.includes(',');
    }else{
        messageErreur.style.display = "none";
        fname.disabled = nom.includes(',');
    }
});

var especeA = document.getElementById("espece")
especeA.addEventListener("input", function() {
    var nom = document.getElementById("espece").value
    if(nom.includes(',')){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! L'espece contient une virgule.";
        fname.disabled = nom.includes(',');
    }else{
        messageErreur.style.display = "none";
        fname.disabled = nom.includes(',');
    }
});

var raceA = document.getElementById("race")
raceA.addEventListener("input", function() {
    var nom = document.getElementById("race").value
    if(nom.includes(',')){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! La race contient une virgule.";
        fname.disabled = nom.includes(',');
    }else{
        messageErreur.style.display = "none";
        fname.disabled = nom.includes(',');
    }
});

var ageA = document.getElementById("age")
ageA.addEventListener("input", function() {
    var nom = document.getElementById("age").value
    if(nom.includes(',')){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! L'age contient une virgule.";
        fname.disabled = nom.includes(',');
    }else{
        messageErreur.style.display = "none";
        fname.disabled = nom.includes(',');
    }
});

var courrielA = document.getElementById("courriel")
courrielA.addEventListener("input", function() {
    var nom = document.getElementById("courriel").value
    if(nom.includes(',')){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! Le courriel contient une virgule.";
        fname.disabled = nom.includes(',');
    }else{
        messageErreur.style.display = "none";
        fname.disabled = nom.includes(',');
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
    var nom = document.getElementById("cp").value
    if(nom.includes(',')){
        messageErreur.style.display = "block";
        messageErreur.style.color = "red";
        messageErreur.textContent = "ATTENTION ! Le code postal contient une virgule.";
        fname.disabled = nom.includes(',');
    }else{
        messageErreur.style.display = "none";
        fname.disabled = nom.includes(',');
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

/*function nombreDeCaractereNom() {
    var nom = document.getElementById("nom").value
    if(nom.length < 3 || nom.length > 20){
        messageErreur.style.display = "block";
        messageErreur.textContent = "ATTENTION ! Le nombre de caractère du nom est invalide (NB: min = 3, max = 20).";
    }else
        messageErreur.style.display = "none";
}

function maxAge() {
    var age = document.getElementById("age").value
    if(age < 0 || age > 30){
        messageErreur.style.display = "block";
        messageErreur.textContent = "ATTENTION ! L'age est invalide (NB: min = 0, max = 30).";
    }else
        messageErreur.style.display = "none";
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function adresseCourrrielValide() {
    var email = document.getElementById("courriel").value 
    if(!isValidEmail(email)){
        messageErreur.style.display = "block";
        messageErreur.textContent = "ATTENTION ! L'email est invalide.";
    }else
        messageErreur.style.display = "none";
}

function isValidCanadianPostalCode(postalCode) {
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    return (postalCodeRegex.test(postalCode) && postalCode.length == 7);
}

function verifieCodePostal() {
    postalCodeToCheck = document.getElementById("cp").value
    if (!isValidCanadianPostalCode(postalCodeToCheck)) {
        messageErreur.style.display = "block";
        messageErreur.textContent = "ATTENTION ! Le code postal est invalide.";
    }else
        messageErreur.style.display = "none";
}*/