import { Component, OnInit } from '@angular/core';
import { UserService} from '../api/user/user.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {QueryService } from '../api/query/query.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss'],
})
export class SuggestionsComponent implements OnInit {

  public test :any
  constructor(private QueryService:QueryService,private router: Router,public toastController: ToastController) {

    
   }

   ngOnInit(){
     
  }


  async submitSuggestion(form) {
    console.log(form.value);
  this.QueryService.submitQuery({
    "title": form.value.title,
    "description":form.value.Description,
    "mobile":localStorage.getItem('mobile'),
    "IssueType":"Suggestion"
  }).subscribe(async (res) => {
    const toast = await this.toastController.create({
      header: 'Dear Customer',
      message: 'We have Recived Your Suggestion , Our Team will Improve it"',
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
