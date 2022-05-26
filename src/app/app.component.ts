import { Component } from '@angular/core';
import { IBook } from './books/interfaces/book.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookShop';
  bookAdd(book:  IBook){
  console.log('ok')
  }
}