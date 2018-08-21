// Déclarer un tableau indexé
var monTableau = [];
var myArray = new Array;

monTableau[0] = "Hugo";
monTableau[1] = "Jonathan";
monTableau[2] = "Elies";
monTableau[3] = "Layla";

console.log(monTableau); //Affiche toutes les données de mon tableau
console.log(monTableau[1]); //Jonathan
console.log(monTableau[3]); //Layla

var nosPrenoms = ["Luc", "Sabuj", "Jean-Philippe", "Alpha", "Kévin"];
console.log(nosPrenoms);

var coordonnee ={
    pernom : "Layla",
    nom : "Lahcène",
    age : 24
};
console.log(coordonnee);
console.log(coordonnee['pernom']);
console.log(coordonnee.nom);

var annuaireDesApprenants = [
    ["Hugo", "LIEGEARD", "07 83 97 15 15"],
    ["Luc", "JOINVIL", "XX XX XX XX XX"],

{
    pernom : "Arnaud",
    nom : "DOHOU",
    tel : "XX XX XX XX XX"
},
{
    pernom: "Momo",
    nom : "AIDOUNI",
    tel : "XX XX XX XX XX"
},
];

console.log(annuaireDesApprenants);
console.log(annuaireDesApprenants[1][0]);
console.log(annuaireDesApprenants[1][1]);
// nope!

console.log(annuaireDesApprenants[2].prenom);
console.log(annuaireDesApprenants[2].nom);

console.clear();

var Contacts = [
    {
        prenom: "Hugo",
        nom: "LIEGEARD",
        coordonnees: {
            email: "wf3@hl-media.fr",
            tel: {
                fixe: "0596 108 328",
                fax: "0596 108 632",
                port: "0783 97 15 15"
            },
            adresse: {
                rue: "35 Rue Jules Michelet",
                cp: "92700",
                ville: "Colombes",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            }
        }
    },
    {
        prenom: "Rodrigue",
        nom: "NOUEL",
        coordonnees: {
            email: "rodrigue@hl-media.fr",
            tel: {
                fixe: "0596 145 569",
                fax: "0596 896 452",
                port: "0696 07 04 34"
            },
            adresse: {
                rue: "Quartier Sainte-Thérèse",
                cp: "97200",
                ville: "Fort-de-France",
                pays: {
                    code: "MQ",
                    nom: "Martinique"
                }
            }
        }
    },
    {
        prenom: "Elies",
        nom: "KEDIM",
        coordonnees: {
            email: "elies.k@hl-media.fr",
            tel: {
                fixe: "",
                fax: "",
                port: "07 89 45 12 56"
            },
            adresse: {
                rue: "Au Paradis",
                cp: "77777",
                ville: "Eden Ville",
                pays: {
                    code: "PA",
                    nom: "3ème Ciel"
                }
            }
        }
    }
];

console.log(Contacts);
console.log(Contacts[0].coordonnees.email);
console.log(Contacts[1].coordonnees.email);
console.log(Contacts[2].coordonnees.email);

/*------------------------------ 
        ~ ~ CONSIGNE ~ ~
    Réaliserune structure JSON
    permettant de stocker des
    recettes de cuisine.
--------------------------------*/

/* ¤ ¤ ¤La 1ere recette ¤ ¤ ¤ */
var miamiam = [
  {
    plat: "Tagliatelles au saumon à la sauce au citron",
    guide: {
      nombrePersonnes: 6,
      temps: "15 min",
      budget: 18.15,
      difficulte: "facile"
    },
    ingredients: [
      "500 g de tagliatelles fraîches",
      "600 g de saumon dans le filet",
      "60 g de beurre",
      "20 cl de crème liquide",
      "2 c.à soupe de jus de citron",
      " 1 / 2 c.à soupe de moutarde",
      "3 tiges de persil",
      "sel, poivre du moulin"
    ],
    preparation: [
        "Coupez le saumon en dés. Faites fondre le beurre dans une sauteuse et faites-y revenir les dés de saumon pendant 10 min. Retirez le poisson de la sauteuse puis baissez le feu. Déglacez la sauteuse avec le jus de citron. ",
        "Ensuite, ajoutez la moutarde, puis versez la crème en filet, sans cesser de mélanger. Salez et poivrez à votre convenance. Remettez les morceaux de saumon et faites cuire à feu doux 5 min.",
        "Portez une grande casserole d'eau salée à ébullition. Plongez-y les tagliatelles et laissez-les cuire le temps indiqué sur le paquet. Égouttez les pâtes et ajoutez-les dans la sauce. Mélangez, rectifiez l'assaisonnement et répartissez dans 6 assiettes chaudes. Parsemez de persil ciselé et servez aussitôt avec du parmesan râpé."],

    // ¤ ¤ ¤La 2eme recette ¤ ¤ ¤

    plat: "Tiramisu aux framboises facile",
    guide: {
      nombrePersonnes: 8,
      temps: "30 min",
      budget: 17.2,
      difficulte: "facile"
    },
    ingredients: [
      "300 g de framboises",
      "40 biscuits à la cuillère",
      "15 cl de café expresso",
      "250 g de mascarpone",
      "80 g de sucre semoule",
      " 3 jaunes œufs",
      "1 c. à soupe de cacao amer",
      "1 pincée de cannelle moulue"
    ],
    preparation : [
        "Lavez les framboises sous un filet d’eau clair et déposez-les sur du papier absorbant pendant quelques minutes pour élimer le surplus d’eau. Laissez sécher à l’air libre pendant quelques instants. Sortez les œufs du réfrigérateur, laissez-les quelques minutes afin qu’ils soient à température ambiante puis séparez le blanc des jaunes. Réservez les jaunes dans un verre. ",
        "Mélangez le sucre et les jaunes d’œufs à l’aide d’un fouet manuel jusqu’à ce qu’ils blanchissent. Incorporez ensuite le mascarpone à la préparation et fouettez vivement afin d’obtenir une crème bien lisse.",
        "Laissez tremper les biscuits à la cuillère, uniquement sur un des côtés, dans le café, puis disposez-les au fond d’un plat à gratin. Recouvrez-les totalement du mélange composé de mascarpone sucre œufs puis déposez une couche généreuse de framboises.",
        "Saupoudrez d’une pincée de cannelle, recouvrez de biscuits trempés dans le café puis à nouveau avec le mélange de mascarpone, saupoudrez pour terminer avec le cacao amer et placez au congélateur pendant au moins 5 heures. Cela permet à la crème au mascarpone de durcir juste ce qu’il faut pour être bien crémeux en bouche.",
        "Sortez du congélateur 1 heure avant de le déguster avec son coulis de framboises accompagné d’une tasse "
    ]
}
];

console.log(miamiam);

/* ++++++++++++++++++++++++++++++++++++++++ */

var receipes = [
  {
    name: "Tiramisu",
    category: "Desserts",
    subCategory: "Gateaux",
    price: "Abordable",
    difficulty: "Facile",
    plate: 8,
    starRating: 4.98462123,
    photoUrl: "https://www.monlien.fr/verslaphoto.jpg",
    videoUrl: "https://www.monlien.fr/verslavideo.mp4",
    cooking: {
      preparation: "30min",
      time: "",
      temp: ""
    },
    ingredients: [
      {
        name: "Sucre",
        quantity: 80,
        unit: "g",
        imgUrl: "https://www.monlien.fr/versingredient.jpg"
      },
      {
        name: "Café Expresso",
        quantity: 15,
        unit: "cl",
        imgUrl: "https://www.monlien.fr/versingredient.jpg"
      },
      {
        name: "Chocolat Cacao Amer",
        quantity: "1",
        unit: "cuillère à soupe",
        imgUrl: "https://www.monlien.fr/versingredient.jpg"
      },
      {
        name: "Canelle",
        quantity: "1",
        unit: "pincée",
        imgUrl: "https://www.monlien.fr/versingredient.jpg"
      }
    ],
    instructions: [
      {
        name: "Séparer les blancs des jaunes d'oeufs.",
        imgUrl: "https://www.monlien.fr/versletape.jpg"
      },
      {
        name: "Mélanger les jaunes avec le sucre roux et le sucre vanillé.",
        imgUrl: "https://www.monlien.fr/versletape.jpg"
      },
      {
        name: "Ajouter le mascarpone au fouet.",
        imgUrl: "https://www.monlien.fr/versletape.jpg"
      }
    ]
  },

  // 88888888888888888888888888888888888
  {
    name: "Tagliatelles au saumon à la sauce au citron",
    category: "Plat",
    subCategory: "Pates",
    price: "Abordable",
    difficulty: "Facile",
    plate: 6,
    starRating: 4.568921,
    photoUrl: "https://www.monlien.fr/verslaphoto.jpg",
    videoUrl: "https://www.monlien.fr/verslavideo.mp4",
    cooking: {
      preparation: "15min",
      time: "30min",
      temp: ""
    },
    ingredients: [
        {
        name: "tagliatelles fraîches",
        quantity: 500,
        unit: "g",
        imgUrl: "https://www.monlien.fr/versingredient.jpg"
      },
      {
        name: "Café Expresso",
        quantity: 15,
        unit: "cl",
        imgUrl: "https://www.monlien.fr/versingredient.jpg"
      },
      {
        name: "Chocolat Cacao Amer",
        quantity: "1",
        unit: "cuillère à soupe",
        imgUrl: "https://www.monlien.fr/versingredient.jpg"
      },
      {
        name: "Canelle",
        quantity: "1",
        unit: "pincée",
        imgUrl: "https://www.monlien.fr/versingredient.jpg"
      }
    ],
    instructions: [
      {
        name:
          "Coupez le saumon en dés. Faites fondre le beurre dans une sauteuse et faites-y revenir les dés de saumon pendant 10 min. Retirez le poisson de la sauteuse puis baissez le feu. Déglacez la sauteuse avec le jus de citron.",
        imgUrl: "https://www.monlien.fr/versletape.jpg"
      },
      {
          name: "Ensuite, ajoutez la moutarde, puis versez la crème en filet, sans cesser de mélanger. Salez et poivrez à votre convenance. Remettez les morceaux de saumon et faites cuire à feu doux 5 min..",
        imgUrl: "https://www.monlien.fr/versletape.jpg"
      },
      {
          name: "Portez une grande casserole d'eau salée à ébullition. Plongez-y les tagliatelles et laissez-les cuire le temps indiqué sur le paquet. Égouttez les pâtes et ajoutez-les dans la sauce. Mélangez, rectifiez l'assaisonnement et répartissez dans 6 assiettes chaudes. Parsemez de persil ciselé et servez aussitôt avec du parmesan râpé.",
        imgUrl: "https://www.monlien.fr/versletape.jpg"
      }
    ]
  }
];

/* -----------------------

    AJOUTER UN ELEMENT

--------------------------*/

var Couleurs = ["Rouge", "Jaune", "Vert"];

console.clear();
console.log(Couleurs);

// la fonction push me permet d'ajouter un element a la fin un tableau.
Couleurs.push('Orange');
console.log(Couleurs);

// la fonction unshift me permet d'ajouter un element aau debut un tableau.
Couleurs.unshift('Bleu');
console.log(Couleurs);

/* -----------------------------------------

    RECUPERER ET SORTIR LE DERNIER ELEMENT

-------------------------------------------*/

/* 
* La fonction pop() me permet de supprimer un ou plusieurs
* elements de mon tableau et d'en recuperer la valeur.
*/

var monDernierElement = Couleurs.pop();
console.log(Couleurs);
console.log(monDernierElement);

/* 
* La meme chose est possible avec le premier element en utilisant shift.
*
* La fonction splice() vous permet de faire sortir un ou plusieurs elements.
*/
