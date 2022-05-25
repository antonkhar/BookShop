import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../../interfaces/book.interfaces';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() editBook?: IBook

  books: IBook[] = [{
    id: 1,
    name: 'book1',
    description: 'desc',
    author: 'author',
    yearIssue: new Date(),
    img: 'https://www.respublica.ru/uploads/00/00/00/dw/t4/467ecb1e5fa4f425.jpg'
  },
  {
    id: 2,
    name: 'book2',
    description: 'desc',
    author: 'author',
    yearIssue: new Date(),
    img: 'https://www.respublica.ru/uploads/00/00/00/dw/t4/467ecb1e5fa4f425.jpg'
  }]

  constructor(private location: Location) {

   }

  ngOnInit(): void {

  }

  goBack(): void {
    this.location.back();
  }

  toSave(): void {
    this.goBack();
  }
}
