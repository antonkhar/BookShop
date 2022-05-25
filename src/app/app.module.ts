import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/modules/books.module';
import { BookDetailComponent } from './books/components/book-detail/book-detail.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './forms/components/form/form.component';
import { CardComponent } from './cart/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    FormComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
