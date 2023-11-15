import { Component,Input,OnInit } from '@angular/core';
import { Chatroom } from 'src/app/model/Chatroom';
import { Message } from 'src/app/model/Message';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements  OnInit {
  
  @Input('c')
  c: Chatroom;
  messages: Message[];
  convD : any;
  constructor(private messageService: MessageService){}
  firsMessage: string;
  ngOnInit(): void {  
    this.convD = convDate(this.c.dateCreated);
    this.messageService.getMessages(this.c).subscribe(data => {
      this.messages = data;
    })
         
    
  }
 

}
function convDate (a: any): Date{
  const b =  a.toJSON();
  const fireBaseTime = new Date(
      b.seconds * 1000 + b.nanoseconds / 1000000,
    );
  return fireBaseTime;
}