import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  siteName = 'Hello World';
  subTitle = '記載著 Will 在網路世界的學習心得與技術分享';
  logoId = 1;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.siteName = 'The Will Will Web';
    }, 2000)
  }

}
