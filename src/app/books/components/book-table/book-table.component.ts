import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConvertApiBook } from 'src/app/shared/api-to-book';
import { map, Observable } from 'rxjs';
import { IApi } from '../../interfaces/api.interface';
import { IBook } from '../../interfaces/book.interface';
import { IBookResponse } from '../../interfaces/data-books.interface';
import { BooksApiService } from '../../services/books-api.service';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  @Output() addCard = new EventEmitter

  public BOOKS!: IBook[]

  constructor(
    private _editService: EditorService,
    private _booksApi: BooksApiService,
    private _convertApiBook: ConvertApiBook
  ) 
  { }

  ngOnInit(): void {
    this._booksApi.getBooks()
    .pipe(
      map(
        (books: any) => {
          return (books as IBookResponse).books;
      })
    )
    .subscribe((books: IApi[]) =>{
      this.BOOKS = this._convertApiBook.apiToBook(books);
      console.log(this.BOOKS);
    });
  }

  public getBook(id:number): void{
    this._editService.getBook(id)
  }

}
