import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public apiURL: string;

    constructor(private httpClient: HttpClient,public ConfigService:ConfigService) {
        this.apiURL = this.ConfigService.apiUrl;
    }

   

  public register(registerData){
    return this.httpClient.post(`${this.apiURL}/api/v1/user`,registerData);
}

public login(loginData){
  return this.httpClient.post(`${this.apiURL}/api/v1/user/login`,loginData);
}

public sendOTP(mobileNO){
  return this.httpClient.get(`${this.apiURL}/api/v1/user/OTP/${mobileNO}`);
}

public varifyOTP(payload){
  return this.httpClient.post(`${this.apiURL}/api/v1/userapi/varifyUserByOTP`,payload);
}

public testApp(){
  return this.httpClient.get('https://api.opmnstr.com/v1/optin/18980/705264')
}

}
