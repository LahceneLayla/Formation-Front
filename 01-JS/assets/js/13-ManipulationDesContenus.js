/*+*+*+*+*+*+**+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+
                LA MANUPULATION DES CONTENUS🍬
+*+*+*+*+*+**+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*/

var l = function(e) { console.log(e)}
        //  l = e => console.log(e)

        // -- je je souhaite récupérer mon lien google... comment procéder ?

const google = document.getElementById('google');
l(google);

// Maintenent je souhaite acceder aux informations de ce lien...
    //  A : Le lien vers lequel pointe la balise 
    l(google.href);
    //  B : L'id de la balise
    l(google.id);
    // C : La classe de la balise
    l(google.textContent);

/* 
    modifier le text de mon lien
*/
google.textContent = "mon lien vers G🍒gle";

/*++++++++++++++++++++++++++++++++++++++++++++++++ 
            AJOUTER UN ELEMENT DANS MA PAGE
++++++++++++++++++++++++++++++++++++++++++++++++++*/

/* 
Nous allons proceder en deux étapes : 
    1. La fonction document.createElement() va permettre de générer un nouvel élement dans le DOM; que je pourrai modifier par la suite avec les méthodes que nous venous de voir...

    ps : ce nouvel element est place en memoire !

    2.l'ajouter a la page
*/

// Definition de l'element
var span = document.createElement('span');

// si je souhaite lui donner un id
span.id = "monSpan";

// si je souhaite lui donner un contenu

span.textContent = "mon beau text en js";

// je l'ajoute a la page 
google.appendChild(span);

/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */

var h1 = document.createElement('h1');
h1.textContent = "Titre de mon Article";
var parent = google.parentNode;
parent.insertBefore(h1, google);


var nay = document.createElement('a');
nay.textContent = "http://sharemycode.fr/alpha2";
google.appendChild(nay);

nay.style.color = "red";
nay.style.textDecoration = "none";


// ********************************

var h1 = document.createElement('h1');
var a = document.createElement('a');
a.textContent = "Le pole s c'est genial !"
a.hrf = "#";
