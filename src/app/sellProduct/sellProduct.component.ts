import { Component,ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { validatelogInService} from '../api/auth/validatelogIn.service';
import { ProductService} from '../api/product/product.service';

@Component({
  selector: 'app-sellProduct',
  templateUrl: './sellProduct.component.html',
  styleUrls: ['./sellProduct.component.scss'],
})
export class SellProductComponent {

  public UserData:any;
  constructor(private ProductService:ProductService,private router: Router,public toastController: ToastController) {
   this.UserData = localStorage.getItem('UserData');
   console.log(this.UserData,this.UserData['fullName'], this.UserData.mobile)
   }

   @ViewChild('fileInput') fileInput;


  
  upload(productData) {
    let payload = productData.value;
    payload.mobile = localStorage.getItem('mobile')
    
    console.log(productData,"productData")
    let fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append("image", fileBrowser.files[0]);
      let result = null;
      this.ProductService.uploadImage(formData).subscribe(res => {
       alert("product uploaded successfully");
       result = res;
       if(res){
         console.log( result.object.name)
         payload.productImage = result.object.name
         this.ProductService.saveProductDetails(payload).subscribe(async saveProductData => {
          alert("product details sell  successfully");
          console.log("saveProductData",saveProductData);
          const toast = await this.toastController.create({
            header: 'Dear Customer',
            message: 'Product Save Successfully"',
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
         });
       }
      });
    }
  }

}
