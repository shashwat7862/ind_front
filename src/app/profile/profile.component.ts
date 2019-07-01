import { Component, OnInit } from '@angular/core';
import { UserService} from '../api/user/user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { validatelogInService} from '../api/auth/validatelogIn.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(private UserService:UserService,private validatelogInService:validatelogInService,private router: Router,public toastController: ToastController) {
   }

   public userData:any;
   public enableEdit:boolean=false;
   ngOnInit(){
     let result = null;
    this.UserService.getUserData(localStorage.getItem('UserId')).subscribe((res)=>{
        console.log(res);
        result = res
        this.userData = result.object;
    });
  }

  enableEditMenu(){
    this.enableEdit = true;
  }

  logOut(){
    localStorage.clear();
    localStorage.setItem('isUserLogin','No');
    this.validatelogInService.validatelogOutUser('logOutUser');
    location.reload()
    // this.router.navigate(['/product'])
  }

  SaveEditedUserData(){
    this.enableEdit = false;
    let result = null;
    console.log(JSON.stringify(this.userData),"userData");
    this.UserService.editUserData(localStorage.getItem('UserId'),
    {
      "email":this.userData.email,
      "fullName":this.userData.fullName
    }).subscribe(async (res)=>{
      console.log("EDIT Done");
      result = res
      this.userData = result.object;
      const toast = await this.toastController.create({
        header: 'Dear Customer',
        message: 'You have Successfully Update your profile',
        position: 'top',
        duration: 4000,
        buttons: [
          , {
            text: 'Close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      toast.present();
  });
  }

}
