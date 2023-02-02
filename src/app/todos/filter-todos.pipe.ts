import { Pipe, PipeTransform } from '@angular/core';
import { filterType } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(value: Todo[], filter: filterType): Todo[] {
    switch (filter) {
      case 'pending':
        return value.filter(todo => !todo.completed);

      case 'completed':
        return value.filter(todo => todo.completed);

      default:
        return value;
    }
  }
}
