import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],

  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('txtEditing') txtEditing: ElementRef;

  isEditing: boolean;
  isCompleted: FormControl<boolean>;
  txtInput: FormControl<string>;

  constructor(private store: Store<AppState>) {
    this.isEditing = false;
  }

  ngOnInit(): void {
    this.isCompleted = new FormControl<boolean>(this.todo.completed, { nonNullable: true });
    this.txtInput = new FormControl<string>(this.todo.text, { validators: Validators.required, nonNullable: true });

    this.isCompleted.valueChanges
      .subscribe({
        next: () => this.store.dispatch(actions.toogleTodo({ id:this.todo.id }))
      });
  }

  onEditTask(): void {
    this.isEditing = true;
    setTimeout(() => this.txtEditing.nativeElement.select(), 0);
  }

  onBlur(): void {
    this.isEditing = false;
    this.txtInput.reset();
  }

  onUpdateTodo(): void {
    if (this.txtInput.invalid || this.txtInput.value.trim() === this.todo.text) {
      return;
    }

    this.store.dispatch(actions.editTodo({ id: this.todo.id, text: this.txtInput.value.trim() }));
  }

  onDeleteTodo(): void {
    this.store.dispatch(actions.deleteTodo({ id: this.todo.id }));
  }
}
