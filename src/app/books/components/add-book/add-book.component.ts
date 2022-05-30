import { Component, OnInit } from '@angular/core';
import { IBook } from '../../interfaces/book.interface';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  
  constructor(private _editorService: EditorService) { }

  ngOnInit(): void {
  }

  public addBook(book: IBook): void{
    this._editorService.pushBook(book);
  }
}
