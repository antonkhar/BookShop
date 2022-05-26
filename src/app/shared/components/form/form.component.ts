import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from 'src/app/books/interfaces/book.interfaces';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  book: IBook = {
    id: 5,
    name: 'name',
    description: 'description',
    author: 'author',
    yearIssue: new Date('1995-12-17'),
    img: 'https://www.respublica.ru/uploads/00/00/00/dw/t4/467ecb1e5fa4f425.jpg',
    price: 1000
  }
  name: string = 'name';
  description: string = 'description';

  constructor(private location: Location) { }

  @Output() Saving = new EventEmitter()

  ngOnInit(): void {
  }

  toSave(){
    this.Saving.emit(this.book);
    this.goBack();
  }

  goBack(){
    this.location.back();
  }
}
