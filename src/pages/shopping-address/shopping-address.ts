import { ShoppingMethodePage } from './../shopping-methode/shopping-methode';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShoppingAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-address',
  templateUrl: 'shopping-address.html',
})
export class ShoppingAddressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingAddressPage');
  }

  goToShoppingMethodePage(){
    this.navCtrl.push(ShoppingMethodePage);
  }

}
