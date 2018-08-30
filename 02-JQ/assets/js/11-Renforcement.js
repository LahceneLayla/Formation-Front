// declarer un tableau indexe
const prenoms = [
    'Layla', 'Jonathan', 'Arnaud', 'Jhordan', 'Elies'
]
console.log(prenoms);
console.log(prenoms[0]);

// afficher les prenoms dans une boucle
for(i = 0; i<prenoms.length; i++){
    console.log('*+*+*+*+*+*+*+*+*+*+*+*+*+*+*')
    console.log(prenoms[i]);
};
var login = {
    nom : 'Daumier',
    prenom : 'Jean-philippe',
    tel : '01 02 03 04 05'
};
console.log(login);
console.log(login.prenom+ ' '+login.nom);

var contacts = [
    {
        nom : 'jiji',
        prenom : 'yaya'
    },
    {
        nom :'kiki',
        prenom : 'riri'
    },
    {
        nom : 'haha',
        prenom : 'pupa',
    }
]
for (i = 0; i < contacts.length; i++){
    document.write('<ul><li>' + contacts[i].prenom + ' ' +contacts[i].nom + '</li></ul>');
    // var img = image.src = "https://cdn.pixabay.com/photo/2015/11/02/02/39/sweater-1017833_960_720.png";
}