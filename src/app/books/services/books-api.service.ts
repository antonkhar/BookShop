import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ConvertApiBook } from 'src/app/shared/api-to-book';
import { IBook } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  constructor(
    private _http: HttpClient,
    private _apiToBook: ConvertApiBook
    ) { }


  public getBooks(): Observable<object> {
    return this._http.get('http://griboedof.kubesh.ru/api/books');
  }

  public updateBook(book: IBook): Observable<any> {
    return this._http.put(`http://griboedof.kubesh.ru/api/books/${book.id}`, this._apiToBook.bookToApi(book));
  }

  public addBook(book: IBook): void{
    this._http.post(`http://griboedof.kubesh.ru/api/books`, this._apiToBook.bookToApi(book));
  }
}