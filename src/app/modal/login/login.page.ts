import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
})
export class LoginPage {

  // "value" passed in componentProps
  @Input() value: number

  constructor(navParams: NavParams,public modalController: ModalController) {
  }
  
  onCancel = () =>
    this.modalController.dismiss('cancel');

}