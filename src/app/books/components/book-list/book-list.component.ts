import { Component, OnInit, Output } from '@angular/core';
import { IBook } from 'src/app/books/interfaces/book.interfaces';
import { EventEmitter } from '@angular/core';
import { EditorService } from '../../services/editor.service';
import { books } from '../../services/mock-books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

  selectedBook?: IBook

  BOOKS: IBook[] = books

  constructor(private editService: EditorService) { }

  onEdit(book: IBook){
  }

  onDelite(){
  }

  ngOnInit(): void {
  }

  getBook(id:number){
    this.editService.getBook(id)
  }


}
