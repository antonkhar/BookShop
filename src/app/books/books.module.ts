import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { EditorService } from './services/editor.service';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddBookComponent } from './components/add-book/add-book.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    AddBookComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    SharedModule
  ],

})
export class BooksModule { }
