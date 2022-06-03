import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/books/interfaces/book.interface';
import { AddBooksService } from '../../services/add-books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public cart: IBook[] = [];

  constructor(private _cartService: AddBooksService) { }

  ngOnInit(): void {
    this.cart = this._cartService.getCart();
  }

  public onDelite(id: number): void{
    this._cartService.remove(id);
  }


}
