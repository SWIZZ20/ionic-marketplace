import { ProductsProvider } from './../../providers/products/products';
import { SingleProductPage } from './../single-product/single-product';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { products } from '../../modals/product-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items:products[];
  annonces=[
    {
      annonceur:"addidas",
      description:"annonce fait pour la sortie de ses chaussures",
      img:"../../assets/imgs/annonces/pub_addidas.jpg"
    },
    {
      annonceur:"nike",
      desciptions:"Annonce pour la sortie de ses nouvelle jacket",
      img:"../../assets/imgs/annonces/jacket_nike.jpg"
    },
    {
      annonceur:"nike",
      desciptions:"Annonce pour la sortie de ses nouvelles chaussures",
      img:"../../assets/imgs/annonces/nike-colin.jpg"
    },
    {
      annonceur:"addidas",
      description:"Annonce pour la sortie de ses nouvelle jackets",
      img:"../../assets/imgs/annonces/jacket_addidas.jpg"
    }
    
  ]

  constructor(public navCtrl: NavController,public productService:ProductsProvider) {
    this.items=this.productService.product_list;
  }

  goToSingleProductPage(item:products){
    this.navCtrl.push(SingleProductPage,{produit:item});
  }

}
