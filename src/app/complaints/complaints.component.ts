import { Component, OnInit } from '@angular/core';
import { UserService} from '../api/user/user.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {QueryService } from '../api/query/query.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss'],
})
export class ComplaintsComponent implements OnInit {

  constructor(public QueryService: QueryService,public ToastController: ToastController,public modalController: ModalController,private UserService:UserService,private router: Router,public toastController: ToastController) {
   }

   ngOnInit(){
     
  }

  async submitComplant(form) {
    console.log(form.value);
  this.QueryService.submitQuery({
    "title": form.value.title,
    "description":form.value.Description,
    "mobile":localStorage.getItem('mobile'),
    "IssueType":"Complant"
  }).subscribe(async (res) => {
    const toast = await this.toastController.create({
      header: 'Dear Customer',
      message: 'We have Recived Your complant , We will help You shortly"',
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
    this.router.navigate(['/product'])
  })
  }

}
