/* -----------------------

      LA CONCATENATION🍓

--------------------------*/

var DebutDePhrase = "Aujourd'hui ";
var DateDuJour = new Date();
const monthNames = [
    "janvier", "février", "mars", "avril", "Mai", "Juin", "Juillet", "Août", "September", "October", "November", "December"
];
var SuiteDePhrase = ", sont présent : ";
var NombreDeStagiaire = 10;
var  FinDePhrase= " apprenants.<br>";

document.write(
  "<h1>" +
    DebutDePhrase + DateDuJour.getDate() + " " + monthNames[DateDuJour.getMonth()] + " " + DateDuJour.getFullYear() + SuiteDePhrase + NombreDeStagiaire + FinDePhrase + "</h1>"
);


