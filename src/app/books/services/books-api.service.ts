import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ConvertApiBook } from 'src/app/shared/api-to-book';
import { IApi } from '../interfaces/api.interface';
import { IBook } from '../interfaces/book.interface';
import { IBookResponse } from '../interfaces/data-books.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  public books: IBook[] = []

  constructor(
    private _http: HttpClient,
    private _convertApiBook: ConvertApiBook
    ) { }


  public getBooks(): void {
    this._http.get('http://griboedof.kubesh.ru/api/books')
    .pipe(
      map(
        (books: any) => {
          return (books as IBookResponse).books;
      }),
    )
    .subscribe((books: IApi[]) =>{
      this.books = this._convertApiBook.apiToBook(books);
      console.log(this.books)
    });

  }
}