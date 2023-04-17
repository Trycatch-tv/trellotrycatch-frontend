import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import { ToDo } from '../../models/toDo.model'


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: [
    ` /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }`
  ]
})
export class TaskComponent implements OnInit {

  toDos: ToDo[]= [
    {
      id: '1',
      title: 'task 1',
      description: 'Esta es la descripción de tarea 1',
      plannedDate: '01/01/2022'
    },
    {
      id: '2',
      title: 'task 2',
      description: 'Esta es la descripción de tarea 2',
      plannedDate: '01/01/2022'
    },
    {
      id: '3',
      title: 'task 3',
      description: 'Esta es la descripción de tarea 3',
      plannedDate: '01/01/2022'
    }
  ];
  doing: ToDo[]= [
    {
      id: '4',
      title: 'task 4',
      description: 'Esta es la descripción de tarea 4',
      plannedDate: '01/01/2022'
    },
    {
      id: '5',
      title: 'task 5',
      description: 'Esta es la descripción de tarea 5',
      plannedDate: '01/01/2022'
    },
    {
      id: '6',
      title: 'task 6',
      description: 'Esta es la descripción de tarea 6',
      plannedDate: '01/01/2022'
    }
  ];
  done: ToDo[]= [
    {
      id: '1',
      title: 'task 7',
      description: 'Esta es la descripción de tarea 7',
      plannedDate: '01/01/2022'
    },
    {
      id: '8',
      title: 'task 8',
      description: 'Esta es la descripción de tarea 8',
      plannedDate: '01/01/2022'
    },
    {
      id: '9',
      title: 'task 9',
      description: 'Esta es la descripción de tarea 9',
      plannedDate: '01/01/2022'
    }
  ];

  constructor(){}

  ngOnInit(): void {
    
  }

  drop(event: CdkDragDrop<ToDo[]>){
    //Condición para movimiento entre columnas

    if (event.previousContainer === event.container) { 
      //condición si esta en la misma columna
       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else { 
      //condición si se mueve a columna diferente
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }

    //console.log(event);
    //moveItemInArray(this.toDos, event.previousIndex, event.currentIndex);

  }

  

}
