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
  counter = 0;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      // this.siteName = 'The Will Will Web';
    }, 2000)
  }

  changeTitle(event: MouseEvent) { // PointerEvent 和 MouseEvent 是父子關係
    console.log(event.altKey);
    this.counter++;
    if(event.altKey) {
      this.siteName = 'The Will Will Web';
    }
  }

}
