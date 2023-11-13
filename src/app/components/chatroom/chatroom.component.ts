import { Component,Input,OnInit } from '@angular/core';
import { Chatroom } from 'src/app/model/Chatroom';
import { Message } from 'src/app/model/Message';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements  OnInit {
  
  @Input('c')
  c?: Chatroom;
  @Input('messages')
  messages?: Message[];
  convD : any;
  
  firsMessage: string;
  ngOnInit(): void {  
    this.convD = convDate(this.c.dateCreated);
  }
 

}
function convDate (a: any): Date{
  const b =  a.toJSON();
  const fireBaseTime = new Date(
      b.seconds * 1000 + b.nanoseconds / 1000000,
    );
  return fireBaseTime;
}