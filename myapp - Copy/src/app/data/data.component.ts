import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  product:Product=new Product('','','',0,0);

  constructor(private productService:DataService){

  }


  onSubmit():void{
    console.warn(this.product);
    // this.productService.saveProduct(this.product);
    this.productService.saveProduct(this.product).subscribe(
      (data)=>{console.log(data);},
    (error)=>{console.log(error);}
    );
    alert("Product added successfully!");
    this.resetForm();

 }
 
 resetForm(){
   this.product.productId='';
   this.product.brand='';
   this.product.description='';
   this.product.qty=0;
   this.product.price=0;
 }

  productData: Product[] = [];
  filteredProducts: Product[] = [];
  userBrand: string = '';

  minPrice: number | null = null;
  maxPrice: number | null = null;

  resultCount: number=0;



  
  // Function to sort products by brand
  Sort(): void {
    this.filteredProducts.sort((a, b) => {
      const brandA = a.brand.trim().toLowerCase();
      const brandB = b.brand.trim().toLowerCase();
      
      if (brandA < brandB) {
        return -1;
      } else if (brandA > brandB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  // Function to filter products by the specified brand
  setBrand(brand: string): void {
    this.filteredProducts = this.productData.filter(product => 
      product.brand.trim().toLowerCase() === brand.trim().toLowerCase()
    );
    return this.updateResultCount();

  }
  setPrice(minPrice: number | null, maxPrice: number | null): void {
    this.filteredProducts = this.productData.filter(product => 
      (minPrice === null || product.price >= minPrice) &&
      (maxPrice === null || product.price <= maxPrice)
    );
    return this.updateResultCount();
  }
  updateResultCount(): void {
    this.resultCount = this.filteredProducts.length;
  }
 
  
}
