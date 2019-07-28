import firebase from 'firebase';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { SignInPage } from './../sign-in/sign-in';
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { users } from '../../modals/user-modal';


/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  user:users;
  confirmPass:string;
  errorMessage:string;

  constructor(public navCtrl: NavController,private authService:AuthServiceProvider ) {
    this.user={} as users
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  goToSignInPage(){
    this.navCtrl.push(SignInPage);
  }

  sigUpFunction(){
    if(this.user.fistName!==null && this.user.lastName!==null && this.user.Email!==null && this.user.phoneNumber!==null){
      if(this.user.Password=== this.confirmPass){
        this.authService.SignUpFunction(this.user.Email, this.user.Password).then((user:firebase.auth.UserCredential)=>{
          if(user){
            this.authService.SaveUserDataOnFirebase(user.user.uid,this.user).then(()=>{
              this.navCtrl.push(SignInPage);
            }).catch(err=>{
              this.errorMessage=err;
            });
          }
        }).catch((err)=>{
          console.log(err);
        });
      }else{
        this.errorMessage='Les deux mots de passe ne correspondent pas'
      }
    }
  }

  signUpWithFacebook(){
    this.authService.signUpWithFacebook();
  }

}
