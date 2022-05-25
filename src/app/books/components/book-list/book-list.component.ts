import { Component, OnInit, Output } from '@angular/core';
import { IBook } from 'src/app/books/interfaces/book.interfaces';
import { EventEmitter } from '@angular/core';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

  selectedBook?: IBook

  books: IBook[] = [
    {
      id: 1,
      name: 'name',
      description: 'description',
      author: 'author',
      yearIssue: new Date('1995-12-17'),
      img: 'https://www.respublica.ru/uploads/00/00/00/dw/t4/467ecb1e5fa4f425.jpg'
    },
    {
      id: 2,
      name: 'name',
      description: 'description',
      author: 'author',
      yearIssue: new Date('1995-12-17'),
      img: 'https://www.respublica.ru/uploads/00/00/00/dw/t4/467ecb1e5fa4f425.jpg'
    },
    {
      id: 3,
      name: 'name',
      description: 'description',
      author: 'author',
      yearIssue: new Date('1995-12-17'),
      img: 'https://www.respublica.ru/uploads/00/00/00/dw/t4/467ecb1e5fa4f425.jpg'
    },
    {
      id: 4,
      name: 'name',
      description: 'description',
      author: 'author',
      yearIssue: new Date('1995-12-17'),
      img: 'https://www.respublica.ru/uploads/00/00/00/dw/t4/467ecb1e5fa4f425.jpg'
    },
    {
      id: 5,
      name: 'name',
      description: 'description',
      author: 'author',
      yearIssue: new Date('1995-12-17'),
      img: 'https://www.respublica.ru/uploads/00/00/00/dw/t4/467ecb1e5fa4f425.jpg'
    },
    {
      id: 6,
      name: 'name',
      description: 'description',
      author: 'author',
      yearIssue: new Date('1995-12-17'),
      img: 'https://www.respublica.ru/uploads/00/00/00/dw/t4/467ecb1e5fa4f425.jpg'
    }
  ]

  constructor() { }

  onEdit(book: IBook){
  }

  onDelite(){
  }

  ngOnInit(): void {
  }



}
