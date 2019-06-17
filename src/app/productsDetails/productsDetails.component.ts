import { Component, OnInit } from '@angular/core';

import { ProductService} from '../api/product/product.service';

import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RegisterPage } from '../modal/register/register.page';
import { QueryPage } from '../modal/query/query.page';
import { ModalPage } from '../modal/modal.page';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-productsDetails',
  templateUrl: './productsDetails.component.html',
  styleUrls: ['./productsDetails.component.scss'],
})
export class productsDetailsComponent implements OnInit {

   public productDetails:any;
   id: string;

   constructor(private route: ActivatedRoute,public toastController: ToastController,private ProductService:ProductService,public modalController: ModalController) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id ,"drftgyhuj");
    let result = null;
   this.ProductService.getProductDetails(this.id).subscribe((res)=>{
       console.log(res);
       result = res
       this.productDetails = result.object[0]
   });
   }
 
   ngOnInit() {
     
   }


  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { value: 123,keyboardClose:true,showBackdrop:true,animated:true },
    });
    return await modal.present();
  }

  
  


  onCancel = () =>
    this.modalController.dismiss('cancel');
    async openShowInterestModal() {
      var isUserLogin = localStorage.getItem('isUserLogin');
    
      if(!isUserLogin){
        const modal = await this.modalController.create({
          component: RegisterPage,
          componentProps: { value: 123,keyboardClose:true,showBackdrop:true,animated:true },
        });
        return await modal.present();
    }else{
        const toast = await this.toastController.create({
          header: 'Dear Customer',
          message: 'We Will call you shortly"',
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

    }

      
    }

    async openQueryModal() {
    
        const modal = await this.modalController.create({
          component: QueryPage,
          componentProps: { value: 123,keyboardClose:true,showBackdrop:true,animated:true },
        });
        return await modal.present();
    

      
    }
  }


