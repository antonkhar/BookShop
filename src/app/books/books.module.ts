import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { EditorService } from './services/editor.service';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksRoutingModule } from './books-routing.module';


@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BooksRoutingModule,
  ],
  exports: [],
  providers: [EditorService]
})
export class BooksModule { }
