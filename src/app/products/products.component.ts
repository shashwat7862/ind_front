import { Component, OnInit } from '@angular/core';
import { ProductService} from './../api/product.service';

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

}
