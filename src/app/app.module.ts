import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { MessageComponent } from './components/message/message.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { ChannelsinfoComponent } from './components/channelsinfo/channelsinfo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http'
  
import { ClickOutsideModule } from 'ng-click-outside';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UsersboxComponent } from './components/usersbox/usersbox.component';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    MessageComponent,
    ChatroomComponent,
    ChannelsinfoComponent,
    LoginComponent,
    UsersboxComponent,
    MainComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ClickOutsideModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"messengerslo-b5b0f","appId":"1:684070144532:web:353925716ac7eabc5d7501","databaseURL":"https://messengerslo-b5b0f-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"messengerslo-b5b0f.appspot.com","apiKey":"AIzaSyASx50veJjsvie0uskN3x-wvr8nUrhx_Lc","authDomain":"messengerslo-b5b0f.firebaseapp.com","messagingSenderId":"684070144532","measurementId":"G-YDLVWXPTYF"})),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
  //  provideFirebaseApp(() => initializeApp({"projectId":"messengerslo-b5b0f","appId":"1:684070144532:web:353925716ac7eabc5d7501","databaseURL":"https://messengerslo-b5b0f-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"messengerslo-b5b0f.appspot.com", "locationId":"europe-west","apiKey":"AIzaSyASx50veJjsvie0uskN3x-wvr8nUrhx_Lc","authDomain":"messengerslo-b5b0f.firebaseapp.com","messagingSenderId":"684070144532","measurementId":"G-YDLVWXPTYF"})),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }