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
  public productData:any ={
    "productName":"",
    "description":"",
    "price":"",
    "brandName":"",
    "modelNo":"",
    "city":"",
    "area":"",
    "pincode": 0,
    "productImage":"",
    "mobile":localStorage.getItem('mobile')
  }
  public getNameAndDes:boolean = false;
  public getpriceAreaandModel:boolean = false

  constructor(private ProductService:ProductService,private router: Router,public toastController: ToastController) {
   this.UserData = localStorage.getItem('UserData');
   console.log(this.UserData)
   }

   @ViewChild('fileInput') fileInput;


   FinalProductSubmit(){
     this.ProductService.saveProductDetails(this.productData).subscribe(async saveProductData => {
          // alert("product details sell  successfully");
          console.log("saveProductData",saveProductData);
          const toast = await this.toastController.create({
            header: 'congratulations',
            message: 'Your Ad will live soon"',
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
  upload() {
    console.log(this.productData,"fvghj");
    let fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append("image", fileBrowser.files[0]);
      let result = null;
      this.getNameAndDes = true;
         this.getpriceAreaandModel = false;

      this.ProductService.uploadImage(formData).subscribe(res => {
       result = res;
       if(res){
         console.log( result.object.name)
         this.productData.productImage = result.object.name;
       }
      });
    }
  }

}
