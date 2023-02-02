import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { createTodo, deleteTodo, editTodo, removeAllCompleted, toggleAll, toogleTodo } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Save the world'),
  new Todo('Buy bitesize groceries'),
  new Todo('Other task')
];

export const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { text }) => [ ...state, new Todo(text) ]),

  on(toogleTodo, (state, { id }) => state.map(todo => {
    if (todo.id === id) {
      const toogled: Todo = new Todo(todo.text);
      toogled.id = todo.id;
      toogled.completed = !todo.completed;

      return toogled;
    }

    return todo;
  })),

  on(editTodo, (state, { id, text }) => state.map(todo => {
    if (todo.id === id) {
      const edited: Todo = new Todo(text);
      edited.id = todo.id;
      edited.completed = todo.completed;

      return edited;
    }

    return todo;
  })),

  on(deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),

  on(toggleAll, (state, { allCompleted }) => state.map(todo => {
    const changedTodo: Todo = new Todo(todo.text);
    changedTodo.id = todo.id;
    changedTodo.completed = allCompleted;

    return changedTodo;
  })),

  on(removeAllCompleted, (state) => state.filter(todo => !todo.completed)),
);
