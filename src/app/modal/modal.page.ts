import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-page',
  templateUrl: './modal.page.html',
})
export class ModalPage {

  // "value" passed in componentProps
  @Input() value: number
    navCtrl: any;

  constructor(navParams: NavParams,public modalController: ModalController) {
    var isUserLogin = localStorage.getItem('isUserLogin');
    if(isUserLogin == 'No'){
        this.openLoginModal();
    }else{
        alert("We Will call you shortly")
    }
    
  }
  
  onCancel = () =>
    this.modalController.dismiss('cancel');

    async openLoginModal() {
        const modal = await this.modalController.create({
          component: '',
          componentProps: { value: 123,keyboardClose:true,showBackdrop:true,animated:true },
        });
        return await modal.present();
      }
    

}