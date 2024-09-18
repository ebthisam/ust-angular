import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-fetchall',
  templateUrl: './fetchall.component.html',
  styleUrls: ['./fetchall.component.css'] // Optional if you want to style separately
})
export class FetchallComponent implements OnInit {
  loading: boolean = false;
  products: Product[] = [];
  product: Product | null = null;
  productId: string = ''; // Make sure this is declared
  error: string | null = null;

  constructor(private productService: DataService) {}

  ngOnInit(): void {}

  fetchAllProducts(): void {
    this.loading = true;
    this.productService.fetchProduct().subscribe(
      (data: Product[]) => {
        this.products = data;
        this.loading = false;  // Set loading to false after data is fetched
        console.log(this.products);
      },
      (error: any) => {
        console.error('Error fetching products:', error);
        this.loading = false;  // Set loading to false in case of error
      }
    );
  }
  fetchProductById(): void {
      this.productService.fetchProductById(this.productId.trim()).subscribe(
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
