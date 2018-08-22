/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

var prenom = prompt("veuillez saisire votre prenom :");
var age =parseInt(prompt("Bonjour " + prenom + " Quel age as-tu ?"));

 var d = new Date();
 
function birthyear(){
    // var a = new Date("22/08/2018");
    // moment('22-08-2018').subtract(age, "annee").calendar();
   var now = getFullYear;
    var result = d.now - age;
}
alert ("you were born in " + birthyear());

/* -- Correction */

// -- 1. Initialisation des Variables
var objetDate = new Date();
var anneeActuelle = objetDate.getFullYear();

// -- 2. Création d'une fonction
function identity() {

    // -- 3. Je demande à l'utilisateur son Prénom
    var prenom = prompt('taper votre nom');
    console.log(prenom);
    console.log(typeof prenom);

    // -- 4. Je lui demande son age
    var age = parseInt(prompt('Bonjour ' + prenom + ' Quel âge as-tu ?'));
    console.log(age);
    console.log(typeof age);

    // -- 5. Déduire l'année de naissance et l'afficher dans un alerte
    var anneeDeNaissance = anneeActuelle - age;
    alert('tu es donc né en ' + anneeDeNaissance + '!')

    // -- 6. Récapitulatif dans la page
    document.write('<h2> Bonjour ' + prenom + ' tu as ' + age + ' ans ! </h2>');
};

// -- 7. Executer la fonction
identity();