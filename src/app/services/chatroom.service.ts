import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Chatroom } from '../model/Chatroom';

@Injectable({
  providedIn: 'root'
})
export class ChatroomService {

  constructor(private fireStore: Firestore) { }

  getChatrooms(): Observable<Chatroom[]>{
    const collectionInstance = collection(this.fireStore,'Chatroom');
    return collectionData(collectionInstance,{idField: "fire_id"}) as Observable<Chatroom[]>;
  }
  
}