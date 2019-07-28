import { ResetPaPasswordPage } from './../pages/reset-pa-password/reset-pa-password';
import { SignUpPage } from './../pages/sign-up/sign-up';
import { SignInPage } from './../pages/sign-in/sign-in';
import { ShotartPage } from './../pages/shotart/shotart';
import { ShoppingPayementPage } from './../pages/shopping-payement/shopping-payement';
import { ShoppingAddressPage } from './../pages/shopping-address/shopping-address';
import { EmptyCardPage } from './../pages/empty-card/empty-card';
import { SingleProductPage } from './../pages/single-product/single-product';
import { ProductsListPage } from './../pages/products-list/products-list';
import { WishlistPage } from './../pages/wishlist/wishlist';
import { CartPage } from './../pages/cart/cart';
import { CategoriesPage } from './../pages/categories/categories';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/settings';
import { ShoppingConfirmPage } from '../pages/shopping-confirm/shopping-confirm';
import { ShoppingMethodePage } from '../pages/shopping-methode/shopping-methode';
import { ShoppingOrderInfosPage } from '../pages/shopping-order-infos/shopping-order-infos';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ProductsProvider } from '../providers/products/products';
import { CartProvider } from '../providers/cart/cart';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CategoriesPage,
    SettingsPage,
    CartPage,
    WishlistPage,
    ProductsListPage,
    SingleProductPage,
    EmptyCardPage,
    ShoppingAddressPage,
    ShoppingPayementPage,
    ShoppingConfirmPage,
    ShoppingMethodePage,
    ShoppingOrderInfosPage,
    ShotartPage,
    SignInPage,
    SignUpPage,
    ResetPaPasswordPage,
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CategoriesPage,
    SettingsPage,
    CartPage,
    WishlistPage,
    ProductsListPage,
    SingleProductPage,
    EmptyCardPage,
    ShoppingAddressPage,
    ShoppingPayementPage,
    ShoppingConfirmPage,
    ShoppingMethodePage,
    ShoppingOrderInfosPage,
    ShotartPage,
    SignInPage,
    SignUpPage,
    ResetPaPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    ProductsProvider,
    CartProvider
  ]
})
export class AppModule {}
