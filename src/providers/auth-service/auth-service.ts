import { Injectable } from '@angular/core';
import firebase from "firebase";
import { users } from '../../modals/user-modal';

@Injectable()
export class AuthServiceProvider {

  constructor() {
    console.log('Hello AuthServiceProvider Provider');
  }

  SignUpFunction(email:string, password:string){
    let promise = new Promise((resolve, reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email, password).then((user)=>{
        resolve(user);
      }).catch((err)=>{
        reject(err);
      });
    });
    return promise;
  }

  SignInFunction(email:string, password:string){
    let promise= new Promise((resolve, rejet)=>{
      firebase.auth().signInWithEmailAndPassword(email, password).then((user)=>{
        resolve(user);
      }).catch((err)=>{
        rejet(err);
      });
    });
    return promise;
  }

  SaveUserDataOnFirebase(uid:any, user:users){
    let promise= new Promise((resolve, reject)=>{
      firebase.database().ref().child('users').child(uid).set(
        {
          id:uid,
          nom:user.fistName,
          prenom:user.lastName,
          telephone:user.phoneNumber,
          email:user.Email
        }
      ).then(()=>{
        resolve('Utilisateur '+uid+" ajouté avec succes!")
      }).catch((err)=>{
         reject(err);
      });
    });
    return promise;
  }

  resetPasswordFunction(email:string){
    let promise= new Promise((resolve, reject)=>{
      firebase.auth().sendPasswordResetEmail(email).then(()=>{
        resolve('vérifié votre email');
      }).catch((err)=>{
        reject(err);
      })
    });
    return promise;
  }

  signUpWithFacebook()
  {
    let provider= new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
        alert(JSON.stringify(result));
      }).then((err)=>{
        alert(JSON.stringify(err));
      });
    }).catch((err)=>{
      alert(err);
    });
  }

  getUid(){
    return firebase.auth().currentUser.uid;
  }

  logOutFunction(){
    firebase.auth().signOut();
  }


}
 