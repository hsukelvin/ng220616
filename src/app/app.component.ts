import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  keyword = 'Angular';
  data: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.http.get<any[]>('/api/articles.json').subscribe({
      next: (result) => {
        this.data = result;
        console.log(this.data);
      }
    })
  }

  doSearch(tKeyword: HTMLInputElement, str: string) {
    this.keyword = tKeyword.value = str;
  }
}
