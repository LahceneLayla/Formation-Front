/* --------------------
      LES CONDITIONS🦋
-----------------------*/

// var majoriteLegale = 18;
// if( 18 >= majoriteLegale){
//     alert('bienvenu !');
// }else{
//     alert('sort de là');
// }

/* -------------------------------
             EXERCICE
    Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
    S'il a la majorité légale, alors je lui souhaite la bienvenue, 
    sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */


// function site() {
//     var age = parseInt(prompt ('vous avez quel age ?'));
//     var majorite = 18;
//    if (age >= majorite){
//     window.location.replace("https://i.gifer.com/FYZr.gif");
// }
// else{
//     window.location.replace("https://www.youtube.com/watch?v=YVEY24ieq08");
//     } 
// }
// site();

// correction:

// -- 1. Déclarer la majorité
// const MAJORITELEGALEFR = 18;

// -- 2. Vérifier si l'utilisateur est majeur (fonction)
// function monUtilisateurEstMajeur(age) {
//     if (age >= MAJORITELEGALEFR) {
//         return true;
//     } else {
//         return false;
//     }
// }

// -- 3. Je demande à l'utilisateur son age
// var age = parseInt(prompt("Bonjour, Quel age avez-vous ?", "<Saisissez votre Age>"));

// -- 4. Vérification
// if (monUtilisateurEstMajeur(age)) {
//     alert("Bienvenue sur mon site internet réservé aux majeurs");
//     document.write("0_0 !!!");

// } else {
    // -- 5. Redirection
//     document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";

// }

/* ------------------------------------
      LES OPERATEURS DE COMPARAISON 🦋

      L'operateur de comparaison "==" signifie : egal a.
      il permet  de verifier que 2 variables sont identiques.

      l'operateur de comparaison "===" signifie : strictement egal a.
      il va comparer la valeur, mais aussi le type.

      l'operateur "!=" : different de.
      l'operateur "!==" : strictement different de.
---------------------------------------*/

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// // -- BASE DE DONNEES ☠️ 

var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";



while(emaillog= true){

    var emaillog = prompt('entrez votre email');

    if (email === emaillog) {
        var mdplog = prompt("ton mot de passe");
        if (mdp === mdplog) {
            // return true;
            alert("Bienvenue");
        } else {
            // return false;
            alert('ereur mot de passe');
        }
    } else {
        // return false;
        alert('c\'est pas bon');
    }

   if(mdplog = true){
    break;
   }else{
       alert('c\'est pas bon');
   }
}

// -- Exemple AVEC une fonction

function login(emailUser, mdpUser) {
    return emailUser === email && mdpUser === mdp;
}

if (login(emailUser, mdpUser)) {
    alert("Bienvenue " + emailUser + " !");
} else {
    alert("ATTENTION, email / mot de passe incorrect.");
}

                    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// LES OPERATEURS LOGIQUES 🌍
/*
     🔔L'operateur et : &&
    si la combinaison email et emailuser correspond, et la combinaison mdpuser et mdp correspond. 

➡️ dans cette CSSConditionRule, les 2 doivent obligatoirement correspondre pour être validé.
    ex.if(emailUser === email && mdpUser === mdp){...}

    🔔 l'operateur ou : || 
    si la combinaison email et emailUser et mdp correspond.

➡️dans cette condition, au moins l'une des deux doit correspondre pour etre validée.
   ex: if(emailUser === email || mdpUser === mdp){...}

    🔔 l'operateur not : !
    il signifie le contraire de / differant de

➡️ var monUtilisateurEstApprouve = true;
    if( !monUtilisateurEstApprouve ) {.....};
    Si mon utilisateur est approuvé.
    Reviens à écrire
    if( monUtilisateurEstApprouve === false) {.....};

*/
