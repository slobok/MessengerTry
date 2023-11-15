import { Component, OnInit, } from '@angular/core';


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



