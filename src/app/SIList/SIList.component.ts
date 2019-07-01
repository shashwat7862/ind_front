import { Component, OnInit } from '@angular/core';
import { UserService} from '../api/user/user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { validatelogInService} from '../api/auth/validatelogIn.service'

@Component({
  selector: 'app-SIList',
  templateUrl: './SIList.component.html',
  styleUrls: ['./SIList.component.scss'],
})
export class SIListComponent implements OnInit {

  public getSIDetailsList:any
  constructor(private UserService:UserService,private validatelogInService:validatelogInService,private router: Router,public toastController: ToastController) {
    let result = null;
    this.UserService.getSIList(localStorage.getItem('mobiless')).subscribe((res)=>{
        console.log(res);
        result = res
        this.getSIDetailsList = result.object;
    });
  }

  
   ngOnInit(){
      
  }

   
}
