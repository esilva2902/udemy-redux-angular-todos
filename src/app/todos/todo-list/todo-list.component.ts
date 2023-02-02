import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { filterType } from 'src/app/filter/filter.actions';
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
  currentFilter: filterType;

  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store<AppState>) {

    this.todos = [ ];
    this.currentFilter = 'all';
  }

  ngOnInit(): void {
    this.store.subscribe({
      next: appState => {
        this.todos = appState.todos;
        this.currentFilter = appState.filter.appliedFilter;
        this.cdr.markForCheck();
      }
    });
  }
}
