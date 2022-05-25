import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './books/components/book-detail/book-detail.component';
import { BookListComponent } from './books/components/book-list/book-list.component';
import { CardComponent } from './cart/components/card/card.component';
import { FormComponent } from './forms/components/form/form.component';

const routes: Routes = [
  { path: '', component: BookListComponent},
  { path: 'book/:id', component: BookDetailComponent },
  { path: 'forms', component: FormComponent },
  { path: 'card', component: CardComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
