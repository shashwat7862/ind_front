import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

import { ProductService} from '../api/product/product.service';

import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RegisterPage } from '../modal/register/register.page';
import { QueryPage } from '../modal/query/query.page';
import { ModalPage } from '../modal/modal.page';
import { ToastController } from '@ionic/angular';
import { validatelogInService }     from '../api/auth/validatelogIn.service';
import { ConfigService } from '../api/config';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productsDetails',
  templateUrl: './productsDetails.component.html',
  styleUrls: ['./productsDetails.component.scss'],
})
export class productsDetailsComponent implements OnInit {

   public productDetails:any;
   @Output() loginUpdate = new EventEmitter<string>();
   id: string;

   constructor(public ConfigService:ConfigService,public Router:Router,private route: ActivatedRoute,private validatelogInService: validatelogInService,public toastController: ToastController,private ProductService:ProductService,public modalController: ModalController) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id ,"drftgyhuj");
    let result = null;
   this.ProductService.getProductDetails(this.id).subscribe((res)=>{
       console.log(res);
       result = res
       this.productDetails = result.object[0];
          this.productDetails.productImage =this.ConfigService.apiUrl+ '/'+ this.productDetails.productImage
   });
   }

   imageLoaded(event) {
    console.log(event)
    event.target.src = "https://www.digitalcitizen.life/sites/default/files/styles/lst_small/public/featured/2016-08/photo_gallery.jpg";
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
    
      if(isUserLogin === 'No' || isUserLogin == undefined || isUserLogin == null){
      //   const modal = await this.modalController.create({
      //     component: RegisterPage,
      //     componentProps: { value: 123,keyboardClose:true,showBackdrop:true,animated:true },
      //   });
      //   modal.onDidDismiss()
      //   .then((data) => {
      //     const user = data['data']; // Here's your selected user!
      //     console.log(data,"++++++++++++++++++++++");
      //     this.validatelogInService.validatelogInUser(data.data);
      // });
      //   return await modal.present();
      this.Router.navigate(['/login'])
        
        
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

        let result = null;
        console.log(this.productDetails,"product +++++++++++++")
   this.ProductService.saveShowinterst({ 
    "productName": this.productDetails.productName,
    "productId": this.productDetails._id,
    "city":this.productDetails.city,
    "mobile": localStorage.getItem('mobile'),
    "modelNo": this.productDetails.modelNo,
     "price":this.productDetails.price
      }).subscribe((res)=>{
       console.log(res);
       result = res
   });

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


