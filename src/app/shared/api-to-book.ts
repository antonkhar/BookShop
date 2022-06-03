import { Injectable } from "@angular/core";
import { IApi } from "src/app/books/interfaces/api.interface";
import { IBook } from "src/app/books/interfaces/book.interface";


@Injectable({
  providedIn: 'root'
})
export class ConvertApiBook {

    constructor() { }
  
    public apiToBook(api: IApi[]): IBook[]{

      const books: IBook[] = [];
  
      for(let i = 0; i < api.length;i++){
        const book = {
          id: api[i].id,
          name: api[i].title,
          description: api[i].description,
          author: '',
          yearIssue: api[i].releaseDate,
          img:  'https://www.respublica.ru/uploads/00/00/00/dw/t4/467ecb1e5fa4f425.jpg',//api[i].image,
          price: api[i].price
        }
        books.push(book);
      };
  
      return books;
    }
    
    public bookToApi(book: IBook): IApi{

        const api: IApi = {
          id: book.id,
          description: book.description,
          author_id: 1,
          title: book.name,
          price: book.price,
          genres: [{
            id: 1,
            name: ''
          }],
          previews: [],
          image: book.img,
          writingDate: new Date(),
          releaseDate: new Date()
        }
        
        return api;
    }
  
  }