import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ModalPage } from './modal/modal.page';
import { LoginPage } from './modal/login/login.page';
import { RegisterPage } from './modal/register/register.page';
import { QueryPage } from './modal/query/query.page';
import { FormsModule }   from '@angular/forms';
import { loginFormPageModule} from './login-form/login-form.module'

@NgModule({
  declarations: [AppComponent,ModalPage,LoginPage,RegisterPage,QueryPage],
  entryComponents: [ModalPage,LoginPage,RegisterPage,QueryPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,HttpClientModule,
    CommonModule,
    FormsModule,loginFormPageModule
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
