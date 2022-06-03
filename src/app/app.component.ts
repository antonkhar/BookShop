import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _router : Router,
    private _http: HttpClient
  ){}

  title = 'BookShop';

  public openCart(): void {
    this._router.navigateByUrl('cart');
  }

  public openBooks(): void {
    this._router.navigateByUrl('books');
  }

  public openUsers(): void {
    this._router.navigateByUrl('users');
  }
}