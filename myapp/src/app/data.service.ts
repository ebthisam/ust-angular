import { Injectable } from '@angular/core';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  saveProduct(product:Product):Observable<Object>{
    let url='http://localhost:8090/product/api.1.0/create';
    return this.http.post(url,product);
  }
  fetchProduct():Observable<any>{
    let url='http://localhost:8090/product/api.1.0/fetchall'
    return this.http.get(url);
  }
  fetchProductById(productId: string): Observable<Product> {
    let url="http://localhost:8090/product/api.1.0/fetch";
    return this.http.get<Product>(`${url}/${productId}`);
  }
  updateProduct(product: Product): Observable<any> {
    const url = 'http://localhost:8090/product/api.1.0/update';
    return this.http.put(`${url}/${product.productId}`, product);
  }
  deleteProduct(productId:string):Observable<Product>{
    let url = 'http://localhost:8090/product/api.1.0/deletebyid';
    return this.http.delete<Product>(`${url}/${productId}`);

  }
  




  

}
