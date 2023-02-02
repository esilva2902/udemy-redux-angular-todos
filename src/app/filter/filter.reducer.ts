import { createReducer, on } from '@ngrx/store';
import { setFilter, filterType } from './filter.actions';
export interface FilterState {
  appliedFilter: filterType;
}

export const initialState: FilterState = {
  appliedFilter: 'all'
};

export const filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filter }) => {
    return { appliedFilter: filter };
  })
);
