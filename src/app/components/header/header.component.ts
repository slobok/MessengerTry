import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  curDate: any;
  constructor(private router: Router,
              private auth: AuthService){}
  ngOnInit(): void {
    this.curDate = new Date();  
  }

logout(){
  localStorage.removeItem('vectra_user');
  this.router.navigateByUrl('/login');
}
isLoggedIn(){
    return this.auth.isLoggedIn();
}

}



