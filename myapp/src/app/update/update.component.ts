import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  error: string | null = null;
  product: Product =new Product('','','',0,0);


  constructor(private productService: DataService) {}



  updateProduct(): void {
    if (this.product) {
      this.productService.updateProduct(this.product).subscribe(
        response => {
          console.log('Product updated successfully', response);
          alert('Product updated successfully');
        },
        error => {
          console.error('Error updating product', error);
          this.error = 'Error updating product';
        }
      );
    } else {
      this.error = 'Product is null, cannot update';
    }
  }
}
