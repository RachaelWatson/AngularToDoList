import { Component, OnInit, Input } from '@angular/core';

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



}

export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

}

