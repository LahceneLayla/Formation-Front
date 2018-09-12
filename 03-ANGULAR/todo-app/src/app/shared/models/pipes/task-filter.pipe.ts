import {Task} from '../models/task';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'taskFilter'
})
export class TaskFilterPipe implements  PipeTransform{
  transform(tasks: Task[], status: boolean): Task[]{

    /*
    * je retourne un tableau de tâches filtré par rapport au status*/
    for (let i = tasks.lenght; i--){
      if (tasks[i].status === status){

    }
      return [];
    }
  }
}

