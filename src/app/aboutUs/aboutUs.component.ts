import { Component } from '@angular/core';
import { UserService} from '../api/user/user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutUs',
  templateUrl: './aboutUs.component.html',
  styleUrls: ['./aboutUs.component.scss'],
})
export class AboutUsComponent  {

  constructor(private UserService:UserService,private router: Router,public toastController: ToastController) {
   }

    

}
