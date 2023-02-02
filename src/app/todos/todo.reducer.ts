import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { createTodo } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Save the world'),
  new Todo('Buy bitesize groceries'),
  new Todo('Other task')
];

export const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { text }) => [ ...state, new Todo(text) ])
);
