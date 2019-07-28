import { ShotartPage } from './../pages/shotart/shotart';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyApAGiLsfpxsauN44i4iSSjE-DoMCgA2Zg",
  authDomain: "marketplace-4498c.firebaseapp.com",
  databaseURL: "https://marketplace-4498c.firebaseio.com",
  projectId: "marketplace-4498c",
  storageBucket: "",
  messagingSenderId: "1092831849145",
  appId: "1:1092831849145:web:4e7a78abc88096dd"
};

firebase.initializeApp(firebaseConfig);

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ShotartPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
