import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  @Output()
  showOptions:EventEmitter<any> = new EventEmitter<any>();

  btnOptionsClicked() {
    this.showOptions.emit(true);
  }
}
