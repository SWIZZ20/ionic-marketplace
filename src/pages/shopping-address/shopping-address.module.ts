import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingAddressPage } from './shopping-address';

@NgModule({
  declarations: [
    ShoppingAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingAddressPage),
  ],
})
export class ShoppingAddressPageModule {}
