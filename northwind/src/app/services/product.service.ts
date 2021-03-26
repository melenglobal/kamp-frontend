import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ListResponseModel} from 'src/app/models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   
  apiUrl = 'https://localhost:44313/api/';
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
  let newPath = this.apiUrl + "products/getall"
  return this.httpClient.get<ListResponseModel<Product>>(newPath);     
}

  getProductsByCategoryId(categoryId:number):Observable<ListResponseModel<Product>> {
  let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId
  return this.httpClient.get<ListResponseModel<Product>>(newPath);     
}


}

