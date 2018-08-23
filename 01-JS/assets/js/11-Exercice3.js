// BENCHMARK - BOUCLES JS
// http://jsbench.github.io/#6bdfcd2692ba80c16a68c88554281570

/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) 
de sa moyenne à chaque matière, puis sa moyenne générale. 	
*/

// creer tableau 3d
/* var PremierTrimestre = [
    ["Hugo LIEGEARD", [{"Francais": 12, "Math": 19, "Physique": 4}] ],

    ["Suzana MABOU", [{ "Francais": 11.7, "Anglais": 9, "Physique": 4 }] ],

    ["Myriyam DRAEGEIL", [{ "Francais": 12, "Math": 2, "Physique": 4 }] ],

    ["Victor OLIVIER", [{ "Francais": 12, "Math": 4, "Latin": 19, "EPS":10, "histoir": 13 }] ],

    ["Eric LARONZE", [{ "Francais": 3, "Math": 19, "Physique": 4 }] ],

    ["Robert ADAMS", [{ "Francais": 7, "Math": 19, "Chimie": 8, "Espagnole":15 }] ],

    ["Julia CHILD", [{ "Francais": 20, "EPS": 19, "Physique": 4 }] ]
];


for (var i = 0; i < PremierTrimestre.length; i++) {
    document.write("<h2>" + PremierTrimestre[i][0] + "</h2>");
    for (var d in PremierTrimestre[i].length) {
        document.write(PremierTrimestre[i][d] + "<br>");
    }
} */

// **********************************************************

var PremierTrimestre = [
    {
        prenom: "Hugo",
        nom: "LIEGEARD",
        moyenne: {
            francais: 4,
            math: 6,
            physique: 18
        }
    },
    {
        prenom: "Luc",
        nom: "JOINVIL",
        moyenne: {
            francais: 4,
            math: 5,
            physique: 16,
            eps: 18,
            chimie: 17
        }
    },
    {
        prenom: "Layla",
        nom: "LAHCENE",
        moyenne: {
            francais: 17,
            math: 2,
            physique: 10,
            svt: 18,
            arabe: 10
        }
    },
    {
        prenom: "Alpha",
        nom: "DIALLO",
        moyenne: {
            francais: 12,
            math: 8,
            physique: 14,
            philo: 5,
            eps: 19
        }
    },
    {
        prenom: "Elies",
        nom: "KEDIM",
        moyenne: {
            francais: 2,
            math: 18,
            physique: 17,
            informatique: 15
        }
    }
];
// PremierTrimestre.forEach(function (y) { document.write(y); }); 



document.write('<ol>')

for(var i = 0; i < PremierTrimestre.length; i++){
   
    document.write(PremierTrimestre[i])

    document.write('<li>' + PremierTrimestre[i].nom + ' ' + PremierTrimestre[i].prenom + '</li>');

    for (let matiere in PremierTrimestre[i].moyenne) {
        document.write(matiere +'<br>');
    } 
    

    document.write('------------' + '<br>')
    
}

document.write('</ol>')