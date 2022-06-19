import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: any;

  @Output() deleteItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteArticle(id: number) {
    this.deleteItem.emit(id);
  }

}
