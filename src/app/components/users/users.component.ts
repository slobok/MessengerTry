import { Component,OnInit} from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import {Observable } from 'rxjs';
import { User } from 'src/app/model/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit  {
  constructor (private memberService: MemberService){}
  userData:User[];
  user: User = {};
  ngOnInit(): void {
   this.fillData();
  }

    fillData(){
    this.memberService.getData().subscribe(data => {
      this.userData = data;
    })
  }
  addData(){
    this.memberService.addData(this.user);
  }
  deleteUser(user: User){
    this.memberService.deleteUser(user)
    .then(() =>{
      console.log('Successfuuly deleted data');
    })
    .catch(() => {
      console.log('Korisnikc nije obrisan');
    })
  }
}
