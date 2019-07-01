import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductService} from '../api/product/product.service';
import { TitleCasePipe} from '../Filters/titlecase.pipe'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent
      }
    ])
  ],
  declarations: [ProductsComponent,TitleCasePipe],
  providers:[ProductService]
})
export class productsPageModule {}
