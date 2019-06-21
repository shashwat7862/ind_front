import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../api/auth/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public ShowOTPScreen:Boolean = false;
  public loginStatus= false

  constructor(public toastController: ToastController,private router: Router,public modalController: ModalController,private  authService:  AuthService) {
  }

  ngOnInit() {}


  logIn(form) {
    console.log(form.value);
    let result = null;
  this.authService.login(form.value).subscribe((res) => {
    console.log(res);
    result = res;
     
    this.ShowOTPScreen = true;

    
    localStorage.setItem('mobile',form.value.mobile);
    this.authService.sendOTP(form.value.mobile).subscribe((res) => {
      console.log(res)
    });
  });
}

submitOTP(form){
    let result = null;
    console.log(form)
  this.authService.varifyOTP({
    mobile:localStorage.getItem('mobile'),
    otp:form.value.otp, 
    isLogin:true,
    UserData: {}
  }).subscribe(async (res) => {
      console.log(res)
      result = res;
      this.modalController.dismiss('successLogin');
      const toast = await this.toastController.create({
          header: 'Dear Customer',
          message: 'You have LogIn successfully"',
          position: 'top',
          duration: 4000,
          buttons: [
            {
              text: 'Close',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        toast.present();
        localStorage.setItem('isUserLogin','Yes');
    localStorage.setItem('authToken',result.object.authToken);
    
    
    localStorage.setItem('UserData',result.object.userDetails);
    localStorage.setItem('UserId',result.object.userDetails._id);
    this.router.navigate(['/product'])
         
       
        
    });
}


}
