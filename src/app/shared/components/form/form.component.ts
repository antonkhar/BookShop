import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IBook } from 'src/app/books/interfaces/book.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public book: IBook = {
    id: 5,
    name: 'name',
    description: 'description',
    author: 'author',
    yearIssue: new Date('1995-12-17'),
    img: 'https://www.respublica.ru/uploads/00/00/00/dw/t4/467ecb1e5fa4f425.jpg',
    price: 1000
  }

  constructor(
    private _router: Router
  ) { }

  @Output()
  public savingEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  public toSave(): void {
    this.savingEvent.emit(this.book);
    this.goBack();
  }

  public goBack(): void {
    this._router.navigateByUrl('/books').then();
  }
}
