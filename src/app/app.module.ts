import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TodosModule } from './todos/todos.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,

    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
