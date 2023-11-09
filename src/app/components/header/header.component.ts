import { Component, OnInit, } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  curDate: any;
  
  ngOnInit(): void {
    this.curDate = new Date();  
  }


}
