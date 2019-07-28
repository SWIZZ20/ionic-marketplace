import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingAddressPage } from '../shopping-address/shopping-address';

/**
 * Generated class for the ShoppingPayementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-payement',
  templateUrl: 'shopping-payement.html',
})
export class ShoppingPayementPage {
  public payementType;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingPayementPage');
  }

  goToShoppingAddressPage(){
    this.navCtrl.push(ShoppingAddressPage);
  }

}
