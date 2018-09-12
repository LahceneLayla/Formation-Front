import { Component } from '@angular/core';
import { Task } from  './shared/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // -- tableau de taches


tasks: Task[] = [
  {
    id: 1,
    name: 'faire la vaisselle',
    status: false
  },
  {
    id: 2,
    name: 'Sortir les poubelles',
    status: false
  },
  {
    id: 3,
    name: 'Sortir ma fiancée',
    status: false
  },
  {
    id: 4,
    name: 'corriger les évaluations du poles',
    status: false
  },
];
}

