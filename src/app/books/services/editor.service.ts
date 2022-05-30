import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/book.interface';
import { books } from './mock-books';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  BOOKS: IBook[] = books;

  getBook(id: number){
    return this.BOOKS.find(h => h.id === id)
  }

  revriteBook(book: IBook, id: number){ 
    this.BOOKS.find(h => h.id === id)!.name = book.name;
    this.BOOKS.find(h => h.id === id)!.description = book.description;
    this.BOOKS.find(h => h.id === id)!.author = book.author;
    this.BOOKS.find(h => h.id === id)!.yearIssue = book.yearIssue;
    this.BOOKS.find(h => h.id === id)!.img = book.img;
    this.BOOKS.find(h => h.id === id)!.price = book.price;
  }

  pushBook(book: IBook){
    this.BOOKS.push(book)
  }

  constructor() { }

}
