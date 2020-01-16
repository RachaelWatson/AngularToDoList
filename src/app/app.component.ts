import { Component, Input } from '@angular/core';
import { stringify } from 'querystring';



@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'To Do List';

tasks = [
  {completed: false, 
    task: 'Dance like no one is watching'
  },
  {completed: false, 
    task: 'Eat just one more cookie'
  },
  {completed: false, 
    task: 'Guzzle coffee'
  },
  {completed: true, 
    task: 'Talk to a Boomer about politics'
  },
  {completed: false, 
    task: 'Tell Casey that he is the best dog'
  },
  {completed: false, 
    task: 'Tell Andrew he is just okay'
  }
];
newTodo : string
 addTask(value : string){
if (value !=="") {
  this.tasks = [...this.tasks, {task : value, completed: false }]   
}
}
}

//take value and assign to be a task