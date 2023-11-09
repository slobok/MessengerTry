import { Injectable } from '@angular/core';
import { 
  Firestore,
  collection,
  addDoc,
  collectionData,
  query,
  getDocs
 } 
from '@angular/fire/firestore';

import { User } from '../model/User';
import { Observable } from 'rxjs';
import { deleteDoc, doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  members: Observable<User[]>;
  constructor(private fireStore:Firestore) { }
  
  addData(user:User){
    const collectionInstance = collection(this.fireStore,'test');
    addDoc(collectionInstance,user)
    .then(data => {
      console.log('Uspjesno dodato');
    })
    .catch(data => {
      console.log('Neuspjesna dodavanje');
    })
  }

  readData(){
    const collectionInstance = collection(this.fireStore,'test');
    let users :User[];
    collectionData(collectionInstance).subscribe(val => {
      console.log(val);
    })
  }
//Jedan nacin dodavanja
getData() :Observable<User[]>{
  const collectionInstance = collection(this.fireStore,'test');
  return collectionData(collectionInstance,{idField:'fire_id'}) as Observable<User[]>;
}
deleteUser(user: User){
  const userDocRef = doc(this.fireStore, `test/${user.fire_id}`);
  return deleteDoc(userDocRef)
}

}
