import { Component, OnInit ,ViewChild} from '@angular/core';

import { ProductService} from '../api/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  public isUserLogin:any;
  public productList:any;

  constructor(private ProductService:ProductService) {
     this.isUserLogin = localStorage.getItem('isUserLogin');
   }
   data: any;

 
   ionViewWillEnter() {
     setTimeout(() => {
       this.data = {
         'heading': 'Normal text',
         'para1': 'Lorem ipsum dolor sit amet, consectetur',
         'para2': 'adipiscing elit.'
       };
     }, 5000);
   }
   doRefresh(event){
    let result = null;
    this.ProductService.fetchProductList().subscribe((res)=>{
        console.log(res);
        result = res
        this.productList = result.object;
        this.productList.forEach(product => {
          product.productImage = '//localhost:3000/'+ product.productImage
        });
    });
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
   }

   imageLoaded(event) {
     console.log(event)
     event.target.src = "https://www.digitalcitizen.life/sites/default/files/styles/lst_small/public/featured/2016-08/photo_gallery.jpg";
  }

  
   ngOnInit(){
     let result = null;
    this.ProductService.fetchProductList().subscribe((res)=>{
        console.log(res);
        result = res
        this.productList = result.object;
        this.productList.forEach(product => {
          product.productImage = '//localhost:3000/'+ product.productImage
        });
    });
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
