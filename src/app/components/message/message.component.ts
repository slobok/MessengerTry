import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/model/Message';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit  {

  constructor(private userService: UserService){}

  @Input('message')
  message: Message;
  @Input('replayMessage')
  replayMessage: Message;


  ngOnInit(): void {
    }

  getUser(){
    this.userService.getAllUsers().subscribe((data => {
      
    }))
  }
  }