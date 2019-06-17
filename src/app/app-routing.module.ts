import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'product',
    loadChildren: './products/products.module#productsPageModule'
  },
  {
    path: 'productsDetails/:id',
    loadChildren: './productsDetails/productsDetails.module#productsDetailsPageModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#profilePageModule'
  }, {
    path: 'complaints',
    loadChildren: './complaints/complaints.module#complaintsPageModule'
  }, {
    path: 'suggestions',
    loadChildren: './suggestions/suggestions.module#suggestionsPageModule'
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
