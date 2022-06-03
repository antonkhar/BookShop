import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/book.interface';
import { BooksApiService } from './books-api.service';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private _books: BooksApiService) {
  }

  BOOKS: IBook[] = this._books.books;

  getBook(id: number){
    return this.BOOKS.find(h => h.id === id)
  }

  revriteBook(book: IBook, id: number){ 
    const found = this.BOOKS.findIndex(h => h.id === id);
    this.BOOKS[found] = book;
  }

  pushBook(book: IBook){
    this.BOOKS.push(book)
  }

}
