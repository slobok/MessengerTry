import { Injectable } from '@angular/core';
import { Firestore,collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireStore: Firestore) { }
  
  getAllUsers(){
     const collectionInstance = collection(this.fireStore,'User');
      return collectionData(collectionInstance,{idField: "fire_id"}) as Observable<User[]>;
  }

  getUserFromUsersBy(usersFireId: string,users: User[]):User{      
    let u: User; 
    users.forEach((user: User) => { 
      if(user.fire_id == usersFireId ) {
        u = user;
      }
    })
    return u;
  }



}


