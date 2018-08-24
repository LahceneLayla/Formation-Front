/*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+
                🥓 🥩 🍗 🍖  
                    LE DOM
+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*/ 
/* 
    🌭Le DOM est une interface de développement en js pour html .
    Grace au dom je vais etre en mesure d'acceder / modifier mon code html.

    🍔L'objet "document" : c'est le point d'entree vers mon contenu html.

    🍕chaque page chargée par mon navigateur à un objet "document".
*/
// comment puis-je faire pour récupérer les différentes informations de ma page html?

            /*------------------------------------------------------------
                            document.getElementByID
            --------------------------------------------------------------
            document.getElementByID() est une fonction qui va permettre de recuperer un element html a partir de son identifiant unique : ID
            ----------------------------------------------------------------------------------------------*/

let bonjour = document.getElementById('bonjour');
console.log(bonjour);

            /*----------------------------------------------------------
                            document.getElementByClassName
            ------------------------------------------------------------
            document.getElementByClassName() : c'est une donction qui va permettre de recuperer un ou plusieurs elements (une liste) html a partir de leur classe.
            ----------------------------------------------------------------------------------------------*/

const contenu = document.getElementsByClassName(contenu);
console.log(contenu);

// 🍺 me renvoi un tableau js avec mes elements html

            /* ------------------------------------------------------------
                document.getElementByTagName
            --------------------------------------------------------------
                document.getElementByTagName() est une fonction qui va permettre de recuperer un element html a partir de leur balise.
            ----------------------------------------------------------------------------------------------*/

//  🍝 NOTA BENE : https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector

