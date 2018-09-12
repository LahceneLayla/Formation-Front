import { Component, Input, OnInit } from '@angular/core';
import {Contact} from '../shared/models/contact';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
// Mon composant "profilComponent" s'attend à recevoir en entrée (Input)
// un objet de type contact
export class ProfileComponent implements OnInit {
  @Input() contactProfil: Contact;
  constructor() { }

  ngOnInit() {
  }

}
