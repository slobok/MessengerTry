import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(){}
  myChatrooms = ['chatroom1','chatroom2'];

  ngOnInit(): void {
  }

 
}
