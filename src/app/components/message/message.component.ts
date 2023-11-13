import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from 'src/app/model/Message';
import { User } from 'src/app/model/User';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit  {

  constructor(private userService: UserService,
              private messageService: MessageService,
              private clipboard: Clipboard){}

  @Input('message')
  message: Message;
  @Input('replayMessage')
  replayMessage: Message;
  @Input('chatRoomFireId')
  chatRoomFireId: string;

  @Output() newItemEvent = new EventEmitter();
    // event binding
  showInReplayBox(){
    this.newItemEvent.emit();
  }

  displayRight:boolean = false;
  convD :any;
  ngOnInit(): void {
    console.log( this.message.date.toJSON())
    this.convD = convDate(this.message.date);
  }
  deleteMessage(){
    console.log(this.message.fire_id)
    this.messageService.deleteMessage(this.chatRoomFireId,this.message.fire_id)
    .then(data => {
      window.alert('Successfully deleted message' + data);
    })
    .catch(err =>{
      window.alert('Message note deleted.Please try again' + err);
    })
  }

  showRight(){
    this.displayRight = true;
  }

  //onRightClick(event:any) {
  //  event.preventDefault() //this will disable default action of the context menu
    //there will be your code for the expected right click action
  //  this.showRight();
  //}

copyToClipboard(){
  // copy just text from message.Ipravi ako treba
  this.clipboard.copy(this.message.text);
}

  }
  function convDate (a: any): Date{
    const b =  a.toJSON();
    const fireBaseTime = new Date(
        b.seconds * 1000 + b.nanoseconds / 1000000,
      );
    return fireBaseTime;
}