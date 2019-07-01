import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';

import { ModalPage } from './modal/modal.page';
import { RegisterPage } from './modal/register/register.page';
import { QueryPage } from './modal/query/query.page';
import { FormsModule }   from '@angular/forms';
import { loginFormPageModule} from './login-form/login-form.module';

 
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
 
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';




@NgModule({
  declarations: [AppComponent,ModalPage,RegisterPage,QueryPage],
  entryComponents: [ModalPage,RegisterPage,QueryPage],
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
