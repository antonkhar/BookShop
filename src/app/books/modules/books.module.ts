import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from '../components/book-list/book-list.component';
import { EditorService } from '../services/editor.service';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    BookListComponent
  ],
  providers: [EditorService]
})
export class BooksModule { }
