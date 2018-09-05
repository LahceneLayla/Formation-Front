/*
* pour declarer une classe comme composant de notre application, on importe "component" via @angular/core
* */
import { Component } from '@angular/core';

class Contact {
  id: number;
  name: string;
  username: string;
  email: string;
  adress?: object;
  phone?: number;
  website?: string;
  company?: object;
}
/*
* @component est ce qu'on appel un décorateur. il va nous permettre de définir 3 parametres essentiels à nore application..
* */
@Component({
  /*
  * le selecteur (selector) determine la manière dont le composant sera affiché dans notre html : <app-root></app-root>;
  * vous devez obligatoirement avoir la balise d'ouverture et de fermeture
  */
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*
  * est la partie visible du composant. c'est ce qui s'affiche à l'ecrant lorsque le composant est utilisé.
  * */
  // template: `
    // <h1>{{ title }}</h1>`,
 styleUrls: ['./app.component.css'],

 // styles: [\`h1{ color: purple; font-size: 50px;`]
 })
/*
* la classe contient les données du composant, mais aussi, son comportement (ce qu'il fait).
* */
export class AppComponent {
  // --declaration d'une variable
  title = 'Gestion de mes contactes';
  ContactActif;
  // declaration d'un objet
  unContact: Contact = {
    id: 1,
    name: 'Layla LAHCENE',
    username: 'nanna villhim',
    email: 'layla.lahcene@lepoles.com'
  };
  /*
  * tableau de contacts
  * */
  mesContact: Contact[] = [
    {
      id: 135847,
      name: 'Hugo LIEGEARD',
      username: 'hugo liegeard',
      email: 'hugo.liegeard@lepoles.org'
    },
    {
      id: 224589,
      name: 'Luc JOINVIL',
      username: 'luc.joinvil',
      email: 'luc.joinvil@lepoles.org'
    },
    {
      id: 685932,
      name: 'Alpha DIALLO',
      username: 'alpha diallo',
      email: 'alpha.diallo@lepoles.org'
    },
    {
      id: 457891,
      name: 'Layla LAHCENE',
      username: 'layla lahcene',
      email: 'layla.lahcene@lepoles.org'
    }
  ];
  showContact(contactcliquerparmonutilisateur: Contact) {
    this.ContactActif = contactcliquerparmonutilisateur;
  }
}
