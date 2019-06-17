import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SuggestionsComponent } from './suggestions.component';
import { ProductService} from '../api/product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SuggestionsComponent
      }
    ])
  ],
  declarations: [SuggestionsComponent],
  providers:[ProductService]
})
export class suggestionsPageModule {}
