import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from './books/interfaces/book.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private _router : Router
  ){}

  title = 'BookShop';

  public openCart(): void {
    this._router.navigateByUrl('cart');
  }

  public openBooks(): void {
    this._router.navigateByUrl('books');
  }
}