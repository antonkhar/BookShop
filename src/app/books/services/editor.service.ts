import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { IBook } from '../interfaces/book.interfaces';
import { books } from './mock-books';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  BOOKS: IBook[] = books;

  getBook(id: number){
    return this.BOOKS.find(h => h.id === id)
  }

  constructor() { }

}
