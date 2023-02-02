import { createAction, props } from '@ngrx/store';

export type filterType = 'all' | 'pending' | 'completed';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filter: filterType }>()
);


