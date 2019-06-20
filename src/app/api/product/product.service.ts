import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    apiURL: string = '//localhost:3000';

    constructor(private httpClient: HttpClient) {}

  public sendOtp(mobile,email){
    return this.httpClient.get(`${this.apiURL}/api/v1/user/OTP/${mobile}/${email}`);
}

public fetchProductList()
{
    return this.httpClient.get(`${this.apiURL}/api/v1/Industrial/ProductList`);
}

public getProductDetails(id:string){
  return this.httpClient.get(`${this.apiURL}/api/v1/product/getDetails/${id}`);
  
}

public uploadImage(file){
  return this.httpClient.post(`${this.apiURL}/api/v1/product/saveImage`,file);
  
}

public saveProductDetails(productPayload){
  return this.httpClient.post(`${this.apiURL}/api/v1/product/saveProductDetails`,productPayload);
  
}

public saveShowinterst(payload){
  return this.httpClient.post(`${this.apiURL}/api/v1/showinterst/saveShowinterst`,payload);
}
}
