import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


interface ITodo {
  completed: boolean;
  task: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements ITodo {
  constructor() {
  }

  @Input() completed: boolean;
  @Input() task: string;

  @Output() itemDeleted = new EventEmitter();

  removeTask() {
    this.itemDeleted.emit();
  }

  completeTask() {
    this.completed = true;
  }

}


