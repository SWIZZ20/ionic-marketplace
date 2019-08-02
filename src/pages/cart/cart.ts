import { CartProvider } from './../../providers/cart/cart';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingPayementPage } from '../shopping-payement/shopping-payement';
import { products } from '../../modals/product-modal';



@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  product_list:products[];
  totalPrice:number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cartService:CartProvider) {
    this.product_list=[]
  }

  ionViewDidLoad() {
    this.product_list=this.cartService.productList;
    this.getTotalPrice();
    console.log(this.product_list);
  }

  getTotalPrice(){
    for(let i=0 ; i<this.product_list.length ; i++){
      this.totalPrice=this.totalPrice + this.product_list[i].price;
    }
  }

  remove(){

  }

  likeItem(){
    
  }

  goToShoppingPayementPage()
  {
    this.navCtrl.push(ShoppingPayementPage);
  }

  clearAll(){
    this.product_list.splice(0,this.product_list.length);
    this.getTotalPrice();
  }

}
