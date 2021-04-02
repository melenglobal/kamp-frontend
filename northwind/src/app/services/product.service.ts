import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ListResponseModel} from 'src/app/models/ListResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductsByCategory(categoryId: number) {
    throw new Error('Method not implemented.');
  }
   
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
  add(product:Product):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product);
  }


}

