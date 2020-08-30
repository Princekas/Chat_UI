import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/components/home.component";
import {ChatListComponent} from "./chat/components/chat-list/chat-list.component";
import {ChatWindowComponent} from "./chat/components/chat-window/chat-window.component";
import {SingleChatComponent} from "./chat/components/single-chat/single-chat.component";
import {UserProfileComponent} from "./chat/components/user-profile/user-profile.component";
import {ContactProfileComponent} from "./chat/components/contact-profile/contact-profile.component";
import {SimpleMsgComponent} from "./messages/components/simple-msg/simple-msg.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatListComponent,
    ChatWindowComponent,
    SingleChatComponent,
    UserProfileComponent,
    ContactProfileComponent,
    SimpleMsgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
