import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from '../components/book-list/book-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BookListComponent
  ]
})
export class BooksModule { }
