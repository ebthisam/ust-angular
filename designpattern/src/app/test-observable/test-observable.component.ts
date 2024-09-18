import { Component } from '@angular/core';
import { sensitiveHeaders } from 'http2';
import { listenerCount } from 'process';
import { Observable } from 'rxjs';
import { promiseHooks } from 'v8';

@Component({
  selector: 'app-test-observable',
  standalone: true,
  imports: [],
  templateUrl: './test-observable.component.html',
  styleUrl: './test-observable.component.css'
})
export class TestObservableComponent {

  invoke(){
    let observable:Observable<Object>=this.createObservable();
    this.subscribeToObservable(observable);
  }

  createObservable():Observable<Object>{
    return new Observable((obs)=>{

      setTimeout(()=>{
        obs.next('Hello');
      },1000);
      setTimeout(()=>{
        obs.next('Welcome');
      },2000);
      setTimeout(()=>{
        obs.next('Asynchronous');
      },3000);
      setTimeout(()=>{
        obs.next('Communication');
      },4000);



        // obs.next("1234...");
        // obs.next("456...");
        // obs.next("Hello");
    })
}
subscribeToObservable(observable:Observable<Object>){
    observable.subscribe((data)=>{
        console.log(data,"from subscriber");
    });
}

}
// in onservale the reponse is sent line by line(each time a for loop is working)
// whereas promise(opp of observable) send a chunk of Data(after the whole function is executed)(latency is more)