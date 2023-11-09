import { Component,Input,OnInit } from '@angular/core';
import { Chatroom } from 'src/app/model/Chatroom';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements  OnInit {
  
  @Input('c')
  c?: Chatroom;
  firsMessage: string;
  ngOnInit(): void {  
    
  }
 

}
