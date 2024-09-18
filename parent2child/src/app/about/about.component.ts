import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  @Output()
  public sendData=new EventEmitter<string>();
//is the new user defined event
  childMessage(){
    this.sendData.emit("Hello Everyone");
  }

}
