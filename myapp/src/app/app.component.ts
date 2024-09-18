import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { SimpleChanges } from '@angular/core';


@Component({
  selector: 'myapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnChanges, OnInit, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  title = 'msg from Parent';
 
  constructor() {
    console.log('constructor() called ...from parent ');
  }
 
  ngAfterContentInit(): void {
    console.log('AfterContentInit called ... from parent ');
  }
  ngAfterViewInit():void
  {
    console.log("ngAfterviewInit from parent");
  } 
  ngAfterViewChecked ():void
  {
    console.log("ngAfterviewchecked from parent");
  } 
  
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked called ... from parent ');
  }
 
  ngDoCheck(): void {
    console.log('DoCheck() called ... from parent ');
  }
 
  ngOnInit(): void {
    console.log('OnInit() called ...from parent ');
  }
 
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges() called ...parent ');
  }
  ngOnDestroy():void{
    console.log('OnDestroy() called ...parent ');

  }




























  location="Trivandrum";
  company="UST";
  productid='AZ101#789';
  Description='Dual Camer Dual ';
  available='true';
  instock=this.available;
  qty=200;
  orderqty=0;
  isorderedQtyAvailable=(this.orderqty<this.qty)?true:false;
  deliverColor='white';
  availableValue=(this.orderqty<this.qty)?true:false;
  orderDate:Date=new Date;
  products = [{"productId":"1234","description":"Mobile", "price":7500},
              {"productId":"567","description":"Laptop", "price":10000},
              {"productId":"103","description":"TV", "price":5359},
              {"productId":"143","description":"Shoe", "price":5843},
              {"productId":"038","description":"Car", "price":9479}];
 

              printOrder(inputqty: any): void {
                console.log(inputqty, 'order placed')
              }
            
            
              isDarkTheme: boolean = true;
              onRadioButtonChange(color: string) {
                this.deliverColor = color;
              }
            
              evenColor='grey';
              oddColor='7e7676';
            

               setDarkTheme(): void {
                const body = document.body;
                const containers = document.querySelectorAll('.container');
                const containers1 = document.querySelectorAll('.container1');

              
                body.style.backgroundColor = 'black';
                body.style.color = 'white';
              
                containers.forEach(container => {
                  (container as HTMLElement).style.backgroundColor = '#333'; // Dark background
                  (container as HTMLElement).style.color = 'white';
                  (container as HTMLElement).style.borderColor = '#555'; // Darker border
                });
                containers1.forEach(container => {
                  (container as HTMLElement).style.backgroundColor = '#333'; // Dark background
                  (container as HTMLElement).style.color = 'white';
                  (container as HTMLElement).style.borderColor = '#555'; // Darker border
                });
              
                this.isDarkTheme = true; // Set the flag for dark theme
              }
              
}
