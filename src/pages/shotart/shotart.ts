import { SignUpPage } from './../sign-up/sign-up';
import { SignInPage } from './../sign-in/sign-in';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShotartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shotart',
  templateUrl: 'shotart.html',
})
export class ShotartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShotartPage');
  }

  goToSignInPage(){
    this.navCtrl.push(SignInPage);
  }

  goToSignUpPage(){
    this.navCtrl.push(SignUpPage);
  }

}
