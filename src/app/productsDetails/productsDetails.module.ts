import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { productsDetailsComponent } from './productsDetails.component';
import { ProductService} from '../api/product/product.service';
import { CapitalizeFirstPipe} from '../Filters/capitalizefirst.pipe'


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
  declarations: [productsDetailsComponent,CapitalizeFirstPipe],
  providers:[ProductService],
  exports:[productsDetailsComponent,CapitalizeFirstPipe]
})
export class productsDetailsPageModule {}
