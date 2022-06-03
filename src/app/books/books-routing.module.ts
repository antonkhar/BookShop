import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [
  {
    path:'',
    component: BookListComponent,
  },
  {
    path: 'add',
    component: AddBookComponent
  },
  {
    path: ':id',
    component: BookDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }