import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'query-page',
  templateUrl: './query.page.html',
})
export class QueryPage {

  // "value" passed in componentProps
  @Input() value: number

  constructor(navParams: NavParams,public toastController: ToastController,public modalController: ModalController) {
  }
  
  onCancel = () =>
    this.modalController.dismiss('cancel');

     

    async submitQuery(form) {
      console.log(form.value);
     
      const toast = await this.toastController.create({
        header: 'Dear Customer',
        message: 'We have Recived Your query , We will contact you shortly"',
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
      this.modalController.dismiss('cancel');
    }

}