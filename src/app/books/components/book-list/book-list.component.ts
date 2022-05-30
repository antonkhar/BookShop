import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IBook } from 'src/app/books/interfaces/book.interface';
import { books } from '../../services/mock-books';
import { AddBooksService } from 'src/app/cart/services/add-books.service';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

  @Output() addCard = new EventEmitter

  public BOOKS: IBook[] = books

  constructor(
    private _editService: EditorService,
    private _cartService: AddBooksService,
  ) { }

  ngOnInit(): void {
    
  }

  public onDelete(id: number): void{
    const el = this.BOOKS.findIndex(h => h.id === id);
    this.BOOKS.splice(el, 1) 
  }

  public getBook(id:number): void{
    this._editService.getBook(id)
  }

  public onBuy(book: IBook): void{
    this._cartService.add(book);
    alert( "Book " + book.name + " added to cart" );
  }

}