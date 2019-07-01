import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config'

@Injectable({
  providedIn: 'root'
})
export class QueryService {
    
      public apiURL: string;
    
        constructor(private httpClient: HttpClient,public ConfigService:ConfigService) {
          this.apiURL = this.ConfigService.apiUrl;
        }

   

  public submitQuery(payload){
    return this.httpClient.post(`${this.apiURL}/api/v1/product/saveQuery`,payload);
}

 

 
}
