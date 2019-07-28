import { ShoppingConfirmPage } from './../shopping-confirm/shopping-confirm';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShoppingOrderInfosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shopping-order-infos',
  templateUrl: 'shopping-order-infos.html',
})
export class ShoppingOrderInfosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingOrderInfosPage');
  }

  goToConfirmPage(){
    this.navCtrl.push(ShoppingConfirmPage);
  }

}
