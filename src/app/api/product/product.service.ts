import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config'
 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public apiURL: string;

    constructor(private httpClient: HttpClient,public ConfigService:ConfigService) {
      this.apiURL = this.ConfigService.apiUrl;
    }

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
