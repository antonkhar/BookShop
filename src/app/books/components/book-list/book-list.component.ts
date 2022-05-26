import { Component, OnInit, Output } from '@angular/core';
import { IBook } from 'src/app/books/interfaces/book.interfaces';
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

  onDelite(id: number){
    //this.BOOKS.splice(id-1, 1)
  }

  ngOnInit(): void {
  }

  getBook(id:number){
    this.editService.getBook(id)
  }


}
