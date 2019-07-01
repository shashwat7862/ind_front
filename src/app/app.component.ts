import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { validatelogInService } from './api/auth/validatelogIn.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CapitalizeFirstPipe} from '../app//Filters/capitalizefirst.pipe'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers:[validatelogInService,Geolocation]
})
export class AppComponent {
  public isUserLogin:any ;
  public subscription:any;
  public appPages = [
    {
      title: 'My Account',
      url: '/myAccount',
      icon: 'md-home'
    },
    {
      title: 'Product List',
      url: '/product',
      icon: 'logo-buffer'
    },
    {
      title: 'Complants',
      url: '/complaints',
      icon: 'chatbubbles'
    },{
      title: 'Suggesstions',
      url: '/suggestions',
      icon: 'bulb'
    },{
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },{
      title: 'Term and Cond.',
      url: '/termAndConditions',
      icon: 'finger-print'
    },{
      title: 'About Us',
      url: '/aboutUs',
      icon: 'at'
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
    private statusBar: StatusBar,private validatelogInService: validatelogInService,public Geolocation:Geolocation
  ) {

    this.subscription = validatelogInService.validatelogInUser$.subscribe(
      _isUserLogin => {
        console.log("mission",_isUserLogin);
        // alert("mission called");
        this.isUserLogin = _isUserLogin
    console.log(this.isUserLogin , typeof this.isUserLogin );
  if(  this.isUserLogin == 'successLogin'){
      this.appPages.unshift(this.profile)
  }
    });

    this.subscription = validatelogInService.validatelogOutUser$.subscribe(
      _isUserLogOut=> {
        console.log("mission",_isUserLogOut);
        alert("logout called");
    console.log(this.isUserLogin , typeof this.isUserLogin );
     if(_isUserLogOut == 'logOutUser'){
      this.appPages.shift()
     }
    });

    this.Geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude,resp.coords.longitude , "Geolocation");
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.Geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      console.log(data)
     });

    
     

    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }

  loginUpdate(event){
    alert("login update called")
    console.log(event , event.value);

  }
}
