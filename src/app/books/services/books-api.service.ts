import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiToBook } from 'src/app/shared/components/form/api-to-book';
import { IApi } from '../interfaces/api.interface';
import { IBook } from '../interfaces/book.interface';
import { IDataBooks } from '../interfaces/data-books.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  // public api?: IApi[];
  public books: IBook[] = []

  constructor(
    private _http: HttpClient,
    // private _apiToBook: ApiToBook
    ) { }

  public getBooks(): void {
    this._http.get('http://griboedof.kubesh.ru/api/books')
    // .pipe(
    //   map(
    //     (books: IDataBooks) => {
    //       return books.book;
    //   }),
    // )
    .subscribe((books) =>{
      // this.api= (books) as IApi[];
      // this.books = this._apiToBook.apiToBook((this.api) as IApi[]);
      console.log(books);
    })
  }
}