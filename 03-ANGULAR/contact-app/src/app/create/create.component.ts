import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../shared/models/contact';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
nouveauContact: Contact = new  Contact();
@Output()unContactEstCree = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  // fonction qui est appelée après le submit du formulaire
  exportContact() {
    // lorsque mon formulaire est soumis,
    /*j'émet un évenement qui sera écouté par mon application et qui recuperera
     * les données du nouveau contact */
    // console.log(this.nouveauContact);
    this.unContactEstCree.emit(this.nouveauContact);
    this.nouveauContact = new Contact();

    addContactToArray(nouveauContact: Contact){
      this.mesContactes.push()
    }
  }
}
