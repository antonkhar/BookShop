import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../../interfaces/book.interface';
import { ActivatedRoute } from '@angular/router';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  @Input() editBook?: IBook

  constructor(
    private _route: ActivatedRoute,
    private _editorService: EditorService,) {

   }

  ngOnInit(): void {
    this.getBook();
  }

  public revriteBook(book: IBook): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._editorService.revriteBook(book).subscribe((data) => {
      console.log(data);
      
    });
  }
  
  public getBook(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this.editBook = this._editorService.getBook(id)
  }
}
