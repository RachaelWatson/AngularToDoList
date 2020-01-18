import { Component, Input } from '@angular/core';
import { stringify } from 'querystring';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'To Do List';

  tasks = [
    {
      completed: false,
      task: 'Dance like no one is watching'
    },
    {
      completed: false,
      task: 'Eat just one more cookie'
    },
    {
      completed: false,
      task: 'Guzzle coffee'
    },
    {
      completed: true,
      task: 'Talk to a Boomer about politics'
    },
    {
      completed: false,
      task: 'Tell Casey that he is the best dog'
    },
    {
      completed: false,
      task: 'Tell Andrew he is just okay'
    }
  ];

  @Input()
  newTodo: string;

  addTask() {
    if (this.newTodo.length !== 0) {
      this.tasks.push({ task: this.newTodo, completed: false });
      this.clear();
    }
  }
  onItemDeleted(index) {
    this.tasks.splice(index, 1);
  }

  clear() {
    this.newTodo = '';
  }
  @Input()
  filterTodos: string;

  // filterTasks() {
  //   if (this.filterTodos) {
  //     return this.tasks.filter(task => task.task.toLowerCase().includes(this.filterTodos.toLowerCase()))
  //   } return this.tasks;
  // }
  

}

