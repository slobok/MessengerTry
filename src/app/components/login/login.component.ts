import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';
import { ChatroomService } from 'src/app/services/chatroom.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true; 
  user: User = {name: '',password: ''};
  
  constructor(private auth: AuthService,
              private router: Router,
              private chatroomservice: ChatroomService,
              private messageservice: MessageService){
 }
  
  ngOnInit(): void {
   }
  
   login(){ 
    console.log(this.user);
    this.auth.login(this.user).subscribe((data: any) => {
      console.log(data);
      if( !data[0] ) {
        alert('Bad passwordor username!!');
      }
      else{
        console.log(data);
        const users_fireId =  data[0].fire_id;
        localStorage.setItem('vectra_user',JSON.stringify(users_fireId));
        alert('Succesfully logged in!');
        this.router.navigateByUrl('/profile');
      }
    })

  }
}
