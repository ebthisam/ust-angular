import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input()
  title: string = 'hello';
 
  constructor() {
    console.log('constructor() called ...from child ');
  }
  ngAfterViewInit():void
{
  console.log("ngAfterviewInit from child");
} 
ngAfterViewChecked ():void
{
  console.log("ngAfterviewchecked from child");
} 
ngAfterContentInit(): void {
  console.log('AfterContentInit called ... from child ');
}
ngAfterContentChecked(): void {
  console.log('AfterContentChecked called ... from parent ');
}

ngDoCheck():void{
    console.log("ngDoCheck called from child")
  }
  ngOnInit(): void {
    console.log('OnInit() called ...from child ');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges() called ...from child ');
  }
 
  keyCapture(event: any) {
    this.title = event;
  }
 
  sendMsg() {
    console.warn('click fired ...from child ');
  }
  ngOnDestroy():void{
    console.log('OnDestroy() called ...child ');

  }
}