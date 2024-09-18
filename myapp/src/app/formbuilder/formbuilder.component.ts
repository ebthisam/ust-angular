import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { Product } from '../Product';
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent {
  product: Product =new Product('','','',0,0);
  productForm = this.formBuilder.group({
    productId: ['', [Validators.required, Validators.minLength(8)]],
    brand: [''],
    description: this.formBuilder.group({
      age: [0],
      seasons: [''],
    }),
    qty: [0],
    price: [0],
    suppliers: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.error(this.productForm);
    console.error(this.productForm.value);
    console.error(this.productForm.controls['productId'].value);
    console.error(
      this.productForm.get('description')?.get('age')?.value
    );
    console.log(this.productForm.controls.productId.value);
    
  }

  get suppliers() {
    return this.productForm.get('suppliers') as FormArray;
  }

  addNewSupplier() {
    console.warn(this.suppliers);
    this.suppliers.push(this.formBuilder.control(''));
  }
}

