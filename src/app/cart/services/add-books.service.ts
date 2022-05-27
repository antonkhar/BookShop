import { Injectable } from '@angular/core';
import { IBook } from 'src/app/books/interfaces/book.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AddBooksService {

   _CART: IBook[] = [];

  add(book: IBook){
    this._CART.push(book);
  }

  public remove(id: number): void {
    const el = this._CART.findIndex(h => h.id === id);
    this._CART.splice(el, 1) 
  }

  constructor() { }
}