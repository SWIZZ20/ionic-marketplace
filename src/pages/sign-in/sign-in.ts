import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import firebase  from 'firebase';
import { TabsPage } from './../tabs/tabs';
import { SignUpPage } from './../sign-up/sign-up';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResetPaPasswordPage } from '../reset-pa-password/reset-pa-password';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  email:string;
  password:string;
  errorMessage:string;

  constructor(public navCtrl: NavController, private authService:AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  goToSignUpPage(){
    this.navCtrl.push(SignUpPage);
  }

  goToTabsPage(){
    if(this.email!==null && this.password!==null){
      this.authService.SignInFunction(this.email,this.password).then(()=>{
        this.navCtrl.push(TabsPage);
      }).catch((err)=>{
        this.errorMessage=err;
      });
    }else{
      this.errorMessage='Veillez remplir tous les champs';
    }
  }

  goToResetPasswordPage(){
    this.navCtrl.push(ResetPaPasswordPage);
  }

}
