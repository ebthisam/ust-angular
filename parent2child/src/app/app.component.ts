import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,FormsModule,CommonModule,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parent2child';

  EnterName="John Doe";
  EnterAge="34";
  EnterStatus="Single";
  parentData1="";
  parentData2="";
  parentData3="";
transferData(){
  this.parentData1=this.EnterName;
  this.parentData2=this.EnterAge;
  this.parentData3=this.EnterStatus;

}
value="";
sendData(value:string){
  this.value=value;
}

}
