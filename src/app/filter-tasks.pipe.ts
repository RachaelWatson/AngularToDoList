import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTasks'
})
export class FilterTasksPipe implements PipeTransform {

  transform(tasks: any, filterTodos :string): any {
    if (filterTodos) {
      return tasks.filter(task => task.task.toLowerCase().includes(filterTodos.toLowerCase()))
    } 
    
    return tasks;
  }


}
