import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: string = '//localhost:3000';

  constructor(private httpClient: HttpClient) {}

 
public getUserData(id){
  return this.httpClient.get(`${this.apiURL}/api/v1/user/${id}`);
}

public editUserData(id,payLoad){
  return this.httpClient.put(`${this.apiURL}/api/v1/edit/UserDetails/${id}`,payLoad); 
}

  
}
