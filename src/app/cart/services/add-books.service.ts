import { Injectable } from '@angular/core';
import { IBook } from 'src/app/books/interfaces/book.interfaces';
import { books } from 'src/app/books/services/mock-books';

@Injectable({
  providedIn: 'root'
})
export class AddBooksService {

  BOOKS: IBook[] = books;

  getAddedBook(id: number){
    return this.BOOKS.find(h => h.id === id)
  }

  constructor() { }
}