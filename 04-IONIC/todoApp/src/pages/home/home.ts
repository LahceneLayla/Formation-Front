import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Task} from "../../models/task";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  /*
  * affichage du formulaire*/
  active: boolean = true;

  date: Date = new  Date();

  task: Task = new Task();

  tasks: Task[] = [
    {
      id: 1,
      name: 'faire une sieste 15 minutes',
      status: false,
    },
    {
      id: 2,
      name: 'boire de l\'eau',
      status: true,
    },
    {
      id: 3,
      name: 'promener le chien',
      status: false,
    },
    {
      id: 4,
      name: 'donner a manger aux poissons',
      status: false,
    },
    {
      id: 5,
      name: 'payer les impôts',
      status: true,
    },
  ];
/*
* declanche l'enregistement d'une nouvelle tache*/
  saveTask() {
    if (undefined !== this.task.name){
      /*attribution d'un id*/
      this.task.id = Date.now();

      /*ajout de la tache dans le tableau*/
    this.tasks.push(this.task);

    // --reinitialisation
    this.active = false;
    setTimeout(()=>this.active = true, 0);
    this.task = new Task();
  }
}
  /*
  * declanche l'eregistrement lors de la pression de la touche enter*/
  enterSave(key: string) {
    if (key === "Enter"){
      this.saveTask();
    }
  }

  deleteTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1)
  }
}
