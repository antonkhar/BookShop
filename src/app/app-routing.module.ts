import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  { 
    path: 'books', 
    loadChildren: () => import('./books/books.module').then(module => module.BooksModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(module => module.CartModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./shared/shared.module').then(module => module.SharedModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
