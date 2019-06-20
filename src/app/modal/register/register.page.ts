import { Component, Input, Output,EventEmitter } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../api/auth/auth.service';
import { ToastController } from '@ionic/angular';
// import { ViewController } from 'ionic-angular';

@Component({
  selector: 'register-page',
  templateUrl: './register.page.html',
})
export class RegisterPage {

  // "value" passed in componentProps
  @Input() value: number;
  
  public ShowOTPScreen:Boolean = false

  constructor(navParams: NavParams,public toastController: ToastController,public modalController: ModalController,private  authService:  AuthService) {
  }
  
  onCancel = () =>
    this.modalController.dismiss('cancel');


  ngOnInit() {
  }



  register(form) {
      console.log(form.value);
      let result = null;
    this.authService.register(form.value).subscribe((res) => {
      console.log(res)
      result = res;
      localStorage.setItem('isUserLogin','No');
      localStorage.setItem('authToken',result.object.authToken);
      this.ShowOTPScreen = true;
      localStorage.setItem('mobile',form.value.mobile);
      localStorage.setItem('UserData',result.object.userDetails);
      localStorage.setItem('UserId',result.object.userDetails._id)

      this.authService.sendOTP(form.value.mobile).subscribe((res) => {
        console.log(res)
        result = res;
      });
    });
  }

  submitOTP(form){
      let result = null;
      console.log(form)
    this.authService.varifyOTP(localStorage.getItem('mobile'),form.value.otp).subscribe(async (res) => {
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
           
         
          
      });
  }

}