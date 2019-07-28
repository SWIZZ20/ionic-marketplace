import { ProductsProvider } from './../../providers/products/products';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductsListPage } from '../products-list/products-list';
import { categories } from '../../modals/category-modal';
import { products } from '../../modals/product-modal';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  categories:categories[];
  productList:products[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public productService:ProductsProvider) {
    this.productList=[];
    this.categories = this.productService.category_list;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  goToProductListPage(cat:categories){
    this.productService.getProductByCategory(cat);
    this.productList=this.productService.catList;
    this.navCtrl.push(ProductsListPage,{produits:this.productList,category:cat});
  }

}
