import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  loading: boolean = false;
  products: Product[] = [];
  product: Product | null = null;
  productId: string = ''; // Make sure this is declared
  error: string | null = null;
  constructor(private productService: DataService) {}

  deleteProductById(): void {
    this.productService.deleteProduct(this.productId.trim()).subscribe(
      (data: Product) => {
        this.product = data;
      
      },
      (error: any) => {
        console.error('Error fetching product by ID:', error);
        this.error = 'Product not found or an error occurred.';
        
      }
    );
  
}

}
