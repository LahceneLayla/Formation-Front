/*+*+*+*+*+*+**+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+
            LES EVENEMENTS
    
    Les évènements vont me permettre de déclancher une fonction, c'est à dire, une série d'instructions ; suite à une action de mon utilisateur.

    OBJECTIF : Etre en mesure de capturer ces évènements afin d'executer une fonction.

        ❄️Les Evenements : MOUSE (souris)
            Click : au clic sur l'élément ;
            mouseenter : la souris passe au dessus d'un élément ;
            dbclick : au double clic;
            mouseleave : la souris sors de l'élément ;
            mouseover : au passage de la souris ;

🍄: https://developer.mozilla.org/fr/docs/Web/API/MouseEvent
        ❄️Les Evenements : keyboard (clavier)
            keyup : une touche du clavier a été relachée ;
            keydown : une touche est enfoncée.

🍄: https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent
        ❄️Les Evenements : window ( fenêtre)
            scroll : défilement de la fenêtre ;
            resize : redimentionnement de la fenêtre ;
        ❄️Les Evenements : form ( formulaire)
            change : pour les éléments <input>, <select> et <textarea> ;
            submit : à l'envoi (soumission du formulaire) ;
            input  : pour capter la saisie d'un utilisateur sur un champ <input> ;

    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    pour attacher un évènement à un élément, ou autrement dit, pour déclarer un écouteur d'évènememnt qui se chargera de déclarer un écouteur d'évènement qui se chargera de declancher une fonction, je vais  utiliser la syntaxe suivente :

+*+*+*+*+*+**+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*/

var p = document.getElementById('monParegraph');

function changerLaCouleurEnRouge(){
        p.style.color = 'red';
}
p.addEventListener('mouseover', changerLaCouleurEnRouge);

/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/

var input = document.createElement("input");
input.type = "text";
input.id ="monID";
input.setAttribute("placeholder", "champText");

document.body.appendChild(input); 

function displayUserInput(){
    alert(input.value);
}

input.addEventListener('change', displayUserInput);

