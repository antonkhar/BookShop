import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/book.interface';
import { BooksApiService } from './books-api.service';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private _books: BooksApiService) {
  }

  public BOOKS: IBook[] = [] ;

  getBook(id: number){
    return this.BOOKS.find(h => h.id === id)
  }

  revriteBook(book: IBook){ 
    return this._books.updateBook(book);
  }

  pushBook(book: IBook){
    this._books.addBook(book);
  }

}
