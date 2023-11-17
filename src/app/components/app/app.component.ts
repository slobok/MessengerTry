import { Component,OnInit } from '@angular/core';
import { Chatroom } from 'src/app/model/Chatroom';
import { Message } from 'src/app/model/Message';
import { User } from 'src/app/model/User';
import { ChatroomService } from 'src/app/services/chatroom.service';
import { MessageService } from 'src/app/services/message.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//Napomena.Izmjesti desni dio sa porukama i imenom grupe poljem za slanje,u novu komponentu
//polje za slanje moze takodje u novu komponentu.Mislim da bi ovo bilo jednostavnije..

export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  
}