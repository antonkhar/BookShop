import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IBook } from 'src/app/books/interfaces/book.interface';
import { AddBooksService } from 'src/app/cart/services/add-books.service';
import { EditorService } from '../../services/editor.service';
import { BooksApiService } from '../../services/books-api.service';
import { GenericObject } from 'src/app/shared/interfaces/generic-object.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit {

  @Output() addCard = new EventEmitter

  public tableIsShow: boolean = false;

  public BOOKS: IBook[] = this._booksApi.books

  constructor(
    private _editService: EditorService,
    private _cartService: AddBooksService,
    private _booksApi: BooksApiService
  ) 
  { }

  ngOnInit(): void {
    this._booksApi.getBooks();

    //////////////////////////////////////////////////////////////// 1 test

    // this.Test1([{a: 1}]);
    // this.Test1(null);
    // this.Test1({a: 1});

    //////////////////////////////////////////////////////////////// 2 test

    // let user = {
    //   name: "John",  
    //   age: 30        
    // };

    // console.log(this.Test2(user));

    //////////////////////////////////////////////////////////////// 3 test

    // let user = {
    //   name: "John",  
    //   age: 30        
    // };

    // console.log(this.Test3(user, 'name'));

    //////////////////////////////////////////////////////////////// 4 test

    // let obj1 = {       
    // };

    // let obj2 = {
    //   name: undefined,  
    //   age: undefined        
    // };

    // let obj3 = {
    //   name: "John",  
    //   age: 30        
    // };

    // console.log(this.Test4(obj1));
    // console.log(this.Test4(obj2));
    // console.log(this.Test4(obj3));


    ////////////////////////////////////////////////////////////// 5 test

    // let obj1 = {     
    //   name: "John",  
    //   age: 30   
    // };

    // let obj2 = {
    //   name: "John",  
    //   age: 30        
    // };

    // let obj3 = {
    //   name: "Jo",  
    //   age: 30        
    // };

    // let obj4 = {
    //   name: "John"        
    // };

    // console.log(this.Test5(obj1,obj2));
    // console.log(this.Test5(obj1,obj3));
    // console.log(this.Test5(obj1,obj4));

    // console.log(this.TestMethod5(obj1,obj2));
    // console.log(this.TestMethod5(obj1,obj3));
    // console.log(this.TestMethod5(obj1,obj4));

    ////////////////////////////////////////////////////////////// 6 test

    ////////////////////////////////////////////////////////////// 7 test

    // let obj1 = {     
    //   name: "John",  
    //   age: 30   
    // };

    // let obj2 = {};

    // let obj3 = {a: {}};

    // console.log('is object not empty? : ' + this.Test7(obj1));
    // console.log('is object not empty? : ' + this.Test7(obj2));
    // console.log('is object not empty? : ' + this.Test7(obj3));

  }

  public onDelete(id: number): void{
    const el = this.BOOKS.findIndex(h => h.id === id);
    this.BOOKS.splice(el, 1) 
  }

  public getBook(id:number): void{
    this._editService.getBook(id)
  }

  public onBuy(book: IBook): void{
    this._cartService.add(book);
    alert( "Book " + book.name + " added to cart" );
  }

  public showTable(): void{
    this.tableIsShow = !this.tableIsShow
  }

//////////////////////////////////////////////////////////////////////////////

  public Test1(obj: any): void{
    if(Array.isArray(obj)){
      console.log("is array")
    } else if (obj === null){
      console.log("is null")
    } else{
      console.log("is object");
    }
  }

  public Test2(user: GenericObject): any[]{
    const result = [];
    for(let key in user){
      const el = [key, user[key]];
      result.push(el);
    }
    return result;
  }

  public Test3(user: GenericObject, property: string): Object{
    for(let key in user){
      if(key === property){
          delete user[key];
      }
    }
    return user;
  }

  public Test4(user: GenericObject): boolean{
    for(let key in user){
      if(user[key] != undefined){
        return false
      }
    }
    return true;
  }

  public Test5(obj1: GenericObject, obj2: GenericObject): boolean{
    if(Object.keys(obj1).length == Object.keys(obj2).length){
      for (let i = 0; i < Object.keys(obj1).length ;i++){
        if(Object.keys(obj1)[i] != Object.keys(obj2)[i]){
          return false;
        }
      }
      if(Object.values(obj1).length ==  Object.values(obj2).length){
        for (let i = 0; i < Object.values(obj1).length ;i++){
          if(Object.values(obj1)[i] != Object.values(obj2)[i]){
            return false;
          }
        }
      }
      return true
    }
    return false;
  }

  public TestMethod5(obj1: GenericObject, obj2: GenericObject): boolean{
    if(JSON.stringify(obj1) === JSON.stringify(obj2)){
      return true;
    }
    return false;
  }

  public Test6(){

    //does not work correctly

  }

  public Test7(obj1: GenericObject): boolean{

    //does not work correctly

    if(_.isEmpty(obj1)){
    return false;
    }
    return true;
    
  }
}