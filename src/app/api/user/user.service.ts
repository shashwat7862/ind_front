import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config'

@Injectable({
  providedIn: 'root'
})
export class UserService {
      
        public apiURL: string;
      
          constructor(private httpClient: HttpClient,public ConfigService:ConfigService) {
            this.apiURL = this.ConfigService.apiUrl;
          }
  
 
public getUserData(id){
  return this.httpClient.get(`${this.apiURL}/api/v1/user/${id}`);
}

public editUserData(id,payLoad){
  return this.httpClient.put(`${this.apiURL}/api/v1/edit/UserDetails/${id}`,payLoad); 
}
public getSIList(mobile){
  return this.httpClient.get(`${this.apiURL}/api/v1/getShowInterestList/${mobile}`); 
  
}
  
}
