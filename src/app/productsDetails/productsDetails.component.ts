import { Component, OnInit } from '@angular/core';
import { ProductService} from './../api/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productsDetails',
  templateUrl: './productsDetails.component.html',
  styleUrls: ['./productsDetails.component.scss'],
})
export class productsDetailsComponent implements OnInit {

   public productDetails:any;
   id: string;

   constructor(private route: ActivatedRoute,private ProductService:ProductService) {
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

    

 
  
  }


