import { Component, Input, Output,EventEmitter } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../api/auth/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'register-page',
  templateUrl: './register.page.html',
})
export class RegisterPage {

  // "value" passed in componentProps
  @Input() value: number;
  
  public ShowOTPScreen:Boolean = false

  constructor(private router: Router,navParams: NavParams,public toastController: ToastController,public modalController: ModalController,private  authService:  AuthService) {
  }

  
  
  onCancel = () =>
    this.modalController.dismiss('cancel');


  ngOnInit() {
  }

public tempUserDetails:any;
public loginStatus:boolean
  register(form) {
      console.log(form.value);
      let result = null;
      localStorage.setItem('mobile',form.value.mobile);
      this.tempUserDetails = form.value
    this.authService.register(form.value).subscribe(async (res) => {
      console.log(res)
      result = res;
      localStorage.setItem('isUserLogin','No');
      if(result.error == false){
        if(result.object.msg == "already User registered"){

          this.loginStatus = true;
          const toast = await this.toastController.create({
            header: 'Dear Customer',
            message: 'You have already Registered with us. Please Login"',
            position: 'top',
            duration: 3000,
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
          this.modalController.dismiss('cancel');
          this.router.navigate(['/login'])
        }else{
          this.loginStatus = false;
          this.ShowOTPScreen = true;
          this.authService.sendOTP(form.value.mobile).subscribe((res) => {
             console.log(res)
          });
        }
      }
     

      
    });
  }

  submitOTP(form){
      let result = null;
      console.log(form)
    this.authService.varifyOTP({
      mobile:localStorage.getItem('mobile'),
      otp:form.value.otp, 
      isLogin:this.loginStatus,
      UserData: this.loginStatus ? '': this.tempUserDetails
    }).subscribe(async (res) => {
        console.log(res)
        result = res;
        this.modalController.dismiss('successLogin');
        const toast = await this.toastController.create({
            header: 'Dear Customer',
            message: 'You have Registered successfully"',
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
        
          console.log(result,"OOOOOOOOOOOOOOOOOOOOOOOO")
          localStorage.setItem('UserData',result.object.userDetails);
          localStorage.setItem('UserId',result.object.userDetails._id)
         
          
      });
  }

}