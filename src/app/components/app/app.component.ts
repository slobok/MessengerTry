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
  title = 'project1';
  arr: number[] = [1,2,4,4,5,21,24,1,2,3,4,5,5,12,144,12];
  chatRooms: any[];
  messages: Message[] = [];
  chatRoomName: string ='';
  openedChatroom: Chatroom;
  chatRoomMembers: number = 0;
  showchatRoomPanel: boolean = false;
  message: Message = {text: "",sender: "Slobodan",deleted: false};
  allUsers: User[];
// dodato
  


  showReplayBox: boolean = false;
  mess:Message  = {sender: "",text: ""};
  
  constructor(private chatRoomService: ChatroomService,
              private messageService: MessageService
              ){
                this.fillChatRooms();
              }
  
  ngOnInit(): void {
    this.fillChatRooms();
  }

  clickMessage(m:Message){
    this.showReplayBox = true;
    this.mess.sender = m.sender;
    this.mess.text = m.text;
    this.message.replayToMessage = m.fire_id;
  }
  //Output uses
  clickMessage2(m:Message){
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
      // Dodaj poruke u chatrooms
      this.chatRooms.forEach(chatroom => {
        this.messageService.getMessages(chatroom).subscribe(data => {
          chatroom.Message = data;
        })
      })
    })
  }
  getMessages(chatroom: Chatroom){
      this.showchatRoomPanel = true;
      this.openedChatroom = chatroom;
      this.chatRoomMembers = chatroom.members.length;
      this.messageService.getMessages(chatroom).subscribe((data:Message[]) => {
        console.log(data);
        // Dodato pogleda
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
}