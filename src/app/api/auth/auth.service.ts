import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    apiURL: string = '//localhost:3000';

    constructor(private httpClient: HttpClient) {}

   

  public register(registerData){
    return this.httpClient.post(`${this.apiURL}/api/v1/user`,registerData);
}

public login(loginData){
  return this.httpClient.post(`${this.apiURL}/api/v1/user/login`,loginData);
}

public sendOTP(mobileNO){
  return this.httpClient.get(`${this.apiURL}/api/v1/user/OTP/${mobileNO}`);
}

public varifyOTP(mobile,otp){
  return this.httpClient.get(`${this.apiURL}/api/v1/userapi/varifyUserByOTP/${mobile}/${otp}`);
}

}
