import { Component, OnInit, Input, EventEmitter } from '@angular/core';


interface ITodo{
  completed :boolean;
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

// @Output()
// deleted : new EventEmitter <boolean> = new EventEmitter()

// onDelete(){
//   this.deleted.emit(true);
//     } 

}

export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  //Use parent- child to effect. 
  //Consider using ngContainer for the X button

}

