import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public isUserLogin:any ;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Product',
      url: '/product',
      icon: 'logo-buffer'
    },
    {
      title: 'Complaints',
      url: '/complaints',
      icon: 'logo-buffer'
    },
    {
      title: 'Suggestions',
      url: '/suggestions',
      icon: 'logo-buffer'
    },
   
  ];

public profile=  {
  title: 'Profile',
  url: '/profile',
  icon: 'person'
}

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.isUserLogin = JSON.parse(localStorage.getItem('isUserLogin'))
    console.log(this.isUserLogin , typeof this.isUserLogin );
  if(  this.isUserLogin ){
      this.appPages.push(this.profile)
  }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
