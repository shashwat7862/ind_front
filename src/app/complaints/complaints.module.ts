import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ComplaintsComponent } from './complaints.component';
import { ProductService} from '../api/product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ComplaintsComponent
      }
    ])
  ],
  declarations: [ComplaintsComponent],
  providers:[ProductService]
})
export class complaintsPageModule {}
