import { Injectable } from '@angular/core';
import { 
  CollectionReference,
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  query,
  updateDoc
  } 
 from '@angular/fire/firestore';
import { Message } from '../model/Message';
import { Chatroom } from '../model/Chatroom';
import { Observable } from 'rxjs';
import { orderBy } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private fireStore: Firestore) {}

  getMessages(chatroom: Chatroom): Observable< Message[] >{
    const collectionInstance = collection(this.fireStore,`Chatroom/${chatroom.fire_id}/Message`);
    return collectionData(query(collectionInstance,orderBy('date')),{idField: 'fire_id'}) as Observable < Message[] >;
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

deleteMessage(chatroomFireId: string,messageFireID: string){
  const collectionInstance = doc(this.fireStore,`Chatroom/${chatroomFireId}/Message/${messageFireID}`);
  return deleteDoc(collectionInstance);
}

updateMessage(chatroomFireId: string,messageFireID: string){
  const collectionInstance = doc(this.fireStore,`Chatroom/${chatroomFireId}/Message/${messageFireID}`);
  updateDoc(collectionInstance,{'deleted':true})
  .then(data => {
      alert('Obrisan poruka');
  }
  )
  .catch(err => {
    alert('Not deleted message');
  })
}
// Za test.Za korisnika radi umjesto za poruke
updateMessageSeen(chatroomFireid: string,messageFireID: string ){
  const collectionInstance = doc(this.fireStore,`Chatroom/${chatroomFireid}/Message/${messageFireID}`);
  updateDoc(collectionInstance,{'seen': true})
  .then(data => {
    console.log('Updated to firebase.Message seen by user');
  })
  .catch(err => {
    console.log('Not updated SEEN STATUS  to firebase.Something went wrong');
  }
  )
}

}
