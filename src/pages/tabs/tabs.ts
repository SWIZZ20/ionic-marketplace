import { CartPage } from './../cart/cart';
import { EmptyCardPage } from './../empty-card/empty-card';
import { WishlistPage } from './../wishlist/wishlist';
import { CategoriesPage } from './../categories/categories';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoriesPage;
  tab3Root = CartPage;
  tab4Root = WishlistPage;
  tab5Root = SettingsPage;
  carIsEmpty:boolean=false;

  constructor() {
    
  }
}
