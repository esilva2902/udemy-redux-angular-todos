import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],

  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoPageComponent {

  allCompleted: boolean;

  constructor(
    private store: Store<AppState>) {

    this.allCompleted = false;
  }

  onToggleAll(): void {
    this.allCompleted = !this.allCompleted;
    this.store.dispatch(actions.toggleAll({ allCompleted: this.allCompleted }));
  }
}
