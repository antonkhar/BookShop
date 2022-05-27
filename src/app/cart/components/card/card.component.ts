import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/books/interfaces/book.interfaces';
import { AddBooksService } from '../../services/add-books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public cart: IBook[] = [];

  constructor(private _cartService: AddBooksService) { }

  ngOnInit(): void {
    this.cart = this._cartService._CART;
  }

  public onDelite(id: number): void{
    this._cartService.remove(id);
  }


}
