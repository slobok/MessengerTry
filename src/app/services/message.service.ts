import { Injectable } from '@angular/core';
import { 
  Firestore,
  addDoc,
  collection,
  collectionData
  } 
 from '@angular/fire/firestore';
import { Message } from '../model/Message';
import { Chatroom } from '../model/Chatroom';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private fireStore: Firestore) { }

  getMessages(chatroom: Chatroom): Observable< Message[] >{
    const collectionInstance = collection(this.fireStore,`Chatroom/${chatroom.fire_id}/Message`);
    return collectionData(collectionInstance,{idField: 'fire_id'}) as Observable < Message[] >;
  }


  sendMessage(message: Message,chatroom :Chatroom){
    const collectionInstance = collection(this.fireStore,`Chatroom/${chatroom.fire_id}/Message`);
    addDoc(collectionInstance,message)
    .then(data => {
      console.log('Poslata poruka');
    })
    .catch(err => {
      console.log('Neuspjelo slanje');
    })
 }
 getMessageByFireId(fireId: string,messages: Message[]):Message{
  let message: Message; 
  messages.forEach((m: Message) => {
  if (m.fire_id == fireId){
    message = m;
  }
})
return  message;
}

}
