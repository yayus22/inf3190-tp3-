var fname = document.getElementById("submit_btn")

fname.addEventListener("click", function() {
    contientVirgule()
    nombreDeCaractereNom()
    maxAge()
});

function contientVirgule(){
    var nom = document.getElementById("fname").value
    if(nom.includes(','))
        alert(' no,');

    var espece = document.getElementById("lname").value
    if(espece.includes(','))
        alert(' no,');

    var race = document.getElementById("race").value
    if(race.includes(','))
        alert(' no,');

    var age = document.getElementById("age").value
    if(age.includes(','))
        alert(' no,');

    var email = document.getElementById("email").value
    if(email.includes(','))
        alert(' no,');

    var ac = document.getElementById("ac").value
    if(ac.includes(','))
        alert(' no,');
        
    var cp = document.getElementById("cp").value
    if(cp.includes(','))
        alert(' no,');   

    var ville = document.getElementById("ville").value
    if(ville.includes(','))
        alert(' no,');  
    
    var message = document.getElementById("message").value
    if(message.includes(','))
        alert(' no,');
}

function nombreDeCaractereNom() {
    var nom = document.getElementById("fname").value
    if(nom.length < 3 || nom.length > 20)
        alert(' no nb caractere');
}

function maxAge() {
    var age = document.getElementById("age").value
    if(age < 0 || age > 30)
        alert(' no age incorrect');
}