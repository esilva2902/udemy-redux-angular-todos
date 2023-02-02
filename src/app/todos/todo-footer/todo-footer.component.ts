import { Store } from '@ngrx/store';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';

import { filterType, setFilter } from 'src/app/filter/filter.actions';
import { AppState } from '../../app.reducer';
import { removeAllCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],

  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFooterComponent implements OnInit {
  validFilters: filterType[] = [ 'all', 'pending', 'completed' ];

  currentFilter: filterType;
  pendingTasks: number;

  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store<AppState>) {
    this.pendingTasks = 0;
    this.currentFilter = 'all';
  }

  ngOnInit(): void {
    this.store.select(appState => appState.filter)
      .subscribe({
        next: value => this.currentFilter = value.appliedFilter
      });

    this.store.subscribe({
      next: appState => {
        this.currentFilter = appState.filter.appliedFilter;
        this.pendingTasks = appState.todos.filter(todo => !todo.completed).length;

        this.cdr.markForCheck();
      }
    });
  }

  onSetFilter(filter: filterType): void {
    this.store.dispatch(setFilter({ filter }));
  }

  onRemoveCompleted(): void {
    this.store.dispatch(removeAllCompleted());
  }
}
