import { Component, OnInit } from '@angular/core';
import { UserService} from '../api/user/user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { validatelogInService} from '../api/auth/validatelogIn.service'

@Component({
  selector: 'app-myAccount',
  templateUrl: './myAccount.component.html',
  styleUrls: ['./myAccount.component.scss'],
})
export class MyAccountComponent implements OnInit {

  constructor(private UserService:UserService,private validatelogInService:validatelogInService,private router: Router,public toastController: ToastController) {
   }

  
   ngOnInit(){
      
  }

   
}
