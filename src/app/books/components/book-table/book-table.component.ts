import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IBook } from '../../interfaces/book.interface';
import { BooksApiService } from '../../services/books-api.service';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  @Output() addCard = new EventEmitter

  public BOOKS: IBook[] = this._booksApi.books

  constructor(
    private _editService: EditorService,
    private _booksApi: BooksApiService
  ) 
  { }

  ngOnInit(): void {
    this._booksApi.getBooks();
  }

  public getBook(id:number): void{
    this._editService.getBook(id)
  }

}
