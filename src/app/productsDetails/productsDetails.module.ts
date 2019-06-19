import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { productsDetailsComponent } from './productsDetails.component';
import { ProductService} from '../api/product/product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: productsDetailsComponent
      }
    ])
  ],
  declarations: [productsDetailsComponent],
  providers:[ProductService],
  exports:[productsDetailsComponent]
})
export class productsDetailsPageModule {}
