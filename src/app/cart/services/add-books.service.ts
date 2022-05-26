import { Injectable } from '@angular/core';
import { IBook } from 'src/app/books/interfaces/book.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AddBooksService {

  CART: IBook[] = [];

  getAddedBook(id: number){
  }

  pushCart(book: IBook){
    this.CART.push(book);
    console.log(this.CART)
  }

  constructor() { }
}