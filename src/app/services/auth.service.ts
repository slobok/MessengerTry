import { Injectable } from '@angular/core';
import { Firestore, collectionData, query, where } from '@angular/fire/firestore';
import { User } from '../model/User';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireStore: Firestore) { }

  login(user: User){
    const collectionInstance = collection(this.fireStore,'User');
    return collectionData(query(collectionInstance,where('name','==',user.name),where('password','==',user.password)) ,{idField: 'fire_id'}) as Observable< User >;   
  }
  isLoggedIn(){
    return localStorage.getItem('vectra_user');
  }

}
