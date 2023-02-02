import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],

  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoAddComponent {

  txtInput: FormControl<string>;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl<string>('', { validators: Validators.required, nonNullable: true });
  }

  onAddTodo(): void {
    if (this.txtInput.invalid) {
      return;
    }

    this.store.dispatch(actions.createTodo({ text: this.txtInput.value.trim() }));
    this.txtInput.reset();
  }
}
