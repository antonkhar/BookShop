import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../../interfaces/book.interfaces';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() editBook?: IBook

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private editorService: EditorService,) {

   }

  ngOnInit(): void {
    this.getBook();
  }
  
  getBook(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.editBook = this.editorService.getBook(id)
  }

  goBack(): void {
    this.location.back();
  }

  toSave(): void {
    this.goBack();
  }

  revriteBook(book: IBook)
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.editorService.getBookRevrite(book, id)
  }
}
