import { Component,OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Chatroom } from 'src/app/model/Chatroom';
import { Message } from 'src/app/model/Message';
import { User } from 'src/app/model/User';
import { ChatroomService } from 'src/app/services/chatroom.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//Napomena.Izmjesti desni dio sa porukama i imenom grupe poljem za slanje,u novu komponentu
//polje za slanje moze takodje u novu komponentu.Mislim da bi ovo bilo jednostavnije..

export class AppComponent implements OnInit {
  title = 'project1';
  arr: number[] = [1,2,4,4,5,21,24,1,2,3,4,5,5,12,144,12];
  chatRooms: any[];
  messages: Message[] = [];
  chatRoomName: string ='';
  openedChatroom: Chatroom;
  chatRoomMembers: number = 0;
  showchatRoomPanel: boolean = false;
  message: Message = {text:"",sender:"Slobodan"};
  allUsers: User[];
  
  showReplayBox: boolean = false;
  mess:Message  = {sender: "",text:""};
  
  constructor(private chatRoomService: ChatroomService,
              private messageService: MessageService){}
  
  ngOnInit(): void {
    this.fillChatRooms();
  }

  clickMessage(m:Message){
    this.showReplayBox = true;
    this.mess.sender = m.sender;
    this.mess.text = m.text;
    this.message.replayToMessage = m.fire_id;
  } 
  removeReplayBox(){
    this.showReplayBox = false;
    this.mess.sender = "";
    this.mess.text = "";
    this.message.replayToMessage = '';
  }

  fillChatRooms(){
    this.chatRoomService.getChatrooms().subscribe(data => {
      this.chatRooms = data;
      //console.log(this.chatRooms);
      console.log(data);
    })
  }
  getMessages(chatroom: Chatroom){
      this.showchatRoomPanel = true;
      this.openedChatroom = chatroom;
      this.chatRoomMembers = chatroom.members.length;
      this.messageService.getMessages(chatroom).subscribe(data => {
        console.log(data);
        this.messages = data;
        this.chatRoomName = chatroom.name;
      });
      
  }
  // Mogao bi argument fukcije da ide this.chatRoom,jer poruka se salje
  // na chatroom koji je otvoren.Provjera kome se sve salje poruka i na
  // koji nacin.Bitno.Da li samo moze odogovor da se salje. 
  sendMessage(m: Message,c: Chatroom){
    const date = new Date()
    m.date = date;
    this.messageService.sendMessage(m,c);
    this.message.text = "";
    this.removeReplayBox();
  }

  getReplayMessage(mess: Message,messages :Message[]){
    return this.messageService.getMessageByFireId(mess.replayToMessage,messages);
  }

  onRightClick(event:any) {
    event.preventDefault() //this will disable default action of the context menu
    //there will be your code for the expected right click action
    window.alert('desni klik');
   }
}