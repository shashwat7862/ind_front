import { Component, OnInit ,ViewChild} from '@angular/core';

import { ProductService} from '../api/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  constructor(private ProductService:ProductService) {
    let user = ProductService.getData();
    console.log(user)
   }

   public productList:any;
   ngOnInit(){
     let result = null;
    this.ProductService.fetchProductList().subscribe((res)=>{
        console.log(res);
        result = res
        this.productList = result.object
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
