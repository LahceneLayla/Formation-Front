/* --------------------
      LES FONCTION  👩🏼‍💼
-----------------------*/

/* 
* Déclarer une fonction
* NB : Cette fonction ne retourne aucune valeur et ne prend pas de parametres.
*/

function bonjour(){
    alert('Bonjour');
}
/* 
* je vais executer ma fonction "bonjour" et déclancher ses instructions.
 */
bonjour();

// function nomDeMaFonction(argument1, argument2, argumentn){

// }

function ditBonjour(prenom) {
    alert('Bonjour ' + prenom+ '!');
}
ditBonjour('Layla ');

/* ----------------------------------------------------------------------------------------
      Exercice🌸
      creez une fonction permettant d'effectuer l'addition de deux nombre (nb1 et nb2).
-------------------------------------------------------------------------------------------*/

function ajout(nb1, nb2) {
    return nb1 + nb2 ;
}

document.write(ajout(22, 3));