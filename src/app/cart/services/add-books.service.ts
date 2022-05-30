import { Injectable } from '@angular/core';
import { IBook } from 'src/app/books/interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class AddBooksService {

   private _CART: IBook[] = [];

  add(book: IBook){
    this._CART.push(book);
  }

  public remove(id: number): void {
    const el = this._CART.findIndex(h => h.id === id);
    this._CART.splice(el, 1);
  }

  public getCart(): IBook[]{
    return this._CART;
  }

  constructor() { }
}