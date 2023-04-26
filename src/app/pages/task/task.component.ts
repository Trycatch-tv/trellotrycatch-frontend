import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Dialog} from '@angular/cdk/dialog';

import { State, ToDo } from '../../models/toDo.model'
import { TodoDialogComponent} from '../../components/todo-dialog/todo-dialog.component'


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
      description: 'task 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, hic? Adipisci soluta cum odio, beatae ratione magni nobis, opti similique rerum minus excepturi sed vel, id voluptatibus repellendu numquam quod.',
      plannedDate: '01/01/2022'
    },
    {
      id: '2',
      title: 'task 2',
      description: 'task 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, hic? Adipisci soluta cum odio, beatae ratione magni nobis, opti similique rerum minus excepturi sed vel, id voluptatibus repellendu numquam quod.',
      plannedDate: '01/01/2022'
    },
    {
      id: '3',
      title: 'task 3',
      description: 'task 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, hic? Adipisci soluta cum odio, beatae ratione magni nobis, opti similique rerum minus excepturi sed vel, id voluptatibus repellendu numquam quod.',
      plannedDate: '01/01/2022'
    }
  ];
  doing: ToDo[]= [
    {
      id: '4',
      title: 'task 4',
      description: 'task 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, hic? Adipisci soluta cum odio, beatae ratione magni nobis, opti similique rerum minus excepturi sed vel, id voluptatibus repellendu numquam quod.',
      plannedDate: '01/01/2022'
    },
    {
      id: '5',
      title: 'task 5',
      description: 'task 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, hic? Adipisci soluta cum odio, beatae ratione magni nobis, opti similique rerum minus excepturi sed vel, id voluptatibus repellendu numquam quod.',
      plannedDate: '01/01/2022'
    },
    {
      id: '6',
      title: 'task 6',
      description: 'task 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, hic? Adipisci soluta cum odio, beatae ratione magni nobis, opti similique rerum minus excepturi sed vel, id voluptatibus repellendu numquam quod.',
      plannedDate: '01/01/2022'
    }
  ];
  done: ToDo[]= [
    {
      id: '1',
      title: 'task 7',
      description: 'task 7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, hic? Adipisci soluta cum odio, beatae ratione magni nobis, opti similique rerum minus excepturi sed vel, id voluptatibus repellendu numquam quod.',
      plannedDate: '01/01/2022'
    },
    {
      id: '8',
      title: 'task 8',
      description: 'task 8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, hic? Adipisci soluta cum odio, beatae ratione magni nobis, opti similique rerum minus excepturi sed vel, id voluptatibus repellendu numquam quod.',
      plannedDate: '01/01/2022'
    },
    {
      id: '9',
      title: 'task 9',
      description: 'task 9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, hic? Adipisci soluta cum odio, beatae ratione magni nobis, opti similique rerum minus excepturi sed vel, id voluptatibus repellendu numquam quod.',
      plannedDate: '01/01/2022'
    }
  ];

  states: State[] = [
    {
      title: "To do",
      id: '1',
      tasks: this.toDos
    },
    {
      title: "Doing",
      id: '2',
      tasks: this.doing
    },
    {
      title: "Done",
      id: '3',
      tasks: this.done
    }
  ];

  constructor(
    private dialog: Dialog

  ){}

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

  AddState(){
    this.states.push({
      id: '',
      title: 'new state',
      tasks: []
    })
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth : '50%',
      data: {
        todo: todo,
      }
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }

  

}
