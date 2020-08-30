import {Component, Output, EventEmitter} from "@angular/core";


@Component({
  selector:'single-chat',
  templateUrl:'./single-chat.component.html',
  styleUrls:['./single-chat.component.css']
})
export class SingleChatComponent{
  @Output()
  showContactProfile:EventEmitter<any> = new EventEmitter<any>();
  contactAvatarClicked(){
    this.showContactProfile.emit(true);
  }
}
