import { ShoppingOrderInfosPage } from './../shopping-order-infos/shopping-order-infos';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShoppingMethodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shopping-methode',
  templateUrl: 'shopping-methode.html',
})
export class ShoppingMethodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingMethodePage');
  }

  goToShoppingInfosPage(){
    this.navCtrl.push(ShoppingOrderInfosPage);
  }

}
