import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IBook } from 'src/app/books/interfaces/book.interfaces';
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

  selectedBook?: IBook

  BOOKS: IBook[] = books

  constructor(private editService: EditorService, private cartService: AddBooksService) { }

  onEdit(book: IBook){
  }

  onDelite(id: number){
    //this.BOOKS.splice(id-1, 1)
  }

  ngOnInit(): void {
  }

  getBook(id:number){
    this.editService.getBook(id)
  }

  onBuy(book: IBook){
    this.cartService.pushCart(book);
  }


}
