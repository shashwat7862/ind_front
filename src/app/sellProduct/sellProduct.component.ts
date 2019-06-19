import { Component, OnInit,ViewChild } from '@angular/core';
import { UserService} from '../api/user/user.service';
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

  constructor(private ProductService:ProductService,private validatelogInService:validatelogInService,private router: Router,public toastController: ToastController) {
   }

   @ViewChild('fileInput') fileInput;

  
  upload() {
    let fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append("image", fileBrowser.files[0]);
      this.ProductService.uploadImage(formData).subscribe(res => {
       alert("product uploaded successfully")
      });
    }
  }

}
