import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  productForm = new FormGroup({
    productId: new FormControl('',[ Validators.required,Validators.minLength(8)]),
    brand: new FormControl(''),
    description: new FormControl('',Validators.maxLength(50)),
    qty: new FormControl(0),
    price: new FormControl(0)
  });

  onSubmit() {
    console.log(this.productForm.value);
  }
}
