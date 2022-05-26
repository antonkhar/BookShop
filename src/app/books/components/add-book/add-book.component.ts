import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../../interfaces/book.interfaces';
import { EditorService } from '../../services/editor.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  // @Input() id? : number;
  // @Input() bookName?: string;
  // @Input() bookDescription?: string;
  // @Input() bookAuthor?: string;
  // @Input() bookYearIssue?: Date;
  // @Input() bookImg?: string;
  // @Input() bookPrice?:  number;
  
  constructor(private editorService: EditorService, private location: Location) { }

  ngOnInit(): void {
  }

  addBook(book: IBook){
    this.editorService.getNewBook(book);
    this.location.back();
  }
}
