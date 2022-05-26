import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'src/app/books/interfaces/book.interfaces';
import { AddBooksService } from '../../services/add-books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  Cart: IBook[] = [];

  @Input() addBook?: IBook

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private editorService: AddBooksService,) { }

  ngOnInit(): void {
  }

  addBookToCart(book: IBook){
    this.Cart.push(book);
  }

  getBook(): void {
  }

}
