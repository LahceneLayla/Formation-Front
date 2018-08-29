/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ 
            LES SELECTEURS D'ENFANTS JQUERY
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ */

// Selectionner toutes les divs de ma page
l($('#menu'));


l($('#menu').children())

// cibler l'enfant
l($("#menu").children("ul"))

// viser l'enfant de l'enfant
l($("#menu").children("ul").find('li'));
// l($("#menu").find('li'));

// cibler un element particulier
l($("#menu").find("li").eq(1));

// les voinsin immédiat
l($('#menu').next()); //le voisin
l($('#menu').next().next()) //le voisin du voisin
l($('#menu').prev()) 

l($("#menu").parent()); //Les parents




LesContacts = [];

$("#LesContacts").click(function () {
    debugger;
    var data = {};
    var nom = $("#nom").val();
    var prenom = $("#prenom").val();
    var tel = parseFloat($("#tel").val());
    var email = $("#email").val();

    data.nom = nom;
    data.prenom = prenom;
    data.tel = tel;
    data.email = email;

    LesContacts.push(data);
});
