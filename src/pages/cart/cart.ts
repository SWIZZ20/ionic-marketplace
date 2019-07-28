import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingPayementPage } from '../shopping-payement/shopping-payement';



@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  goToShoppingPayementPage()
  {
    this.navCtrl.push(ShoppingPayementPage);
  }

}
