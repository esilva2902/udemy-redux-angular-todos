import { ActionReducerMap } from '@ngrx/store';

import { filterType } from './filter/filter.actions';
import { Todo } from './todos/models/todo.model';

import { todoReducer } from './todos/todo.reducer';
import { filterReducer, FilterState } from './filter/filter.reducer';

export interface AppState {
  todos: Todo[];
  filter: FilterState;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
