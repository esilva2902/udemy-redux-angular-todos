import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],

  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store<AppState>) {

    this.todos = [ ];
  }

  ngOnInit(): void {
    this.store.select(appState => appState.todos)
      .subscribe({
        next: todos => {
          this.todos = todos;
          this.cdr.markForCheck();
        }
      });
  }
}
