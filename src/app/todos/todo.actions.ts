import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
  '[TODO] Create Todo',
  props<{ text: string }>()
);

export const toogleTodo = createAction(
  '[TODO] Toogle Todo',
  props<{ id: number }>()
);

export const editTodo = createAction(
  '[TODO] Edit Todo',
  props<{ id: number; text: string }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
);

export const toogleAll = createAction(
  '[TODO] Toogle All',
  props<{ allCompleted: boolean }>()
);
