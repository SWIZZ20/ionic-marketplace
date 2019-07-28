import { Injectable } from '@angular/core';
import { products } from '../../modals/product-modal';
import {Storage} from "@ionic/storage";

/*
  Ce service va nous permettre de gérer notre panier
  Nous stockons provisoirement de information lié à la commande en local
  avant de pouvoir les Envoyer sur firebase.
*/
@Injectable()
export class CartProvider {

  productList:products[];
   i:number=0;

  constructor(private storage :Storage) {
    console.log('Hello CartProvider Provider');
    this.productList=[];
  }

  saveDataInLocal(dataStore:products[])
  {
    this.storage.set("cart",dataStore).then((successData)=>{
      console.log("Data Stored");
      console.log(successData);
    });
  }

  getValue(){
    new Promise ((resolve, rejet)=>{
      this.storage.get("cart").then((data)=>{
        resolve(data);
      });
    });
  }

  AddNewProduct(produit: products){
    this.storage.get('cart').then((data)=>{
    
      if(data===null){
        produit.quantite++;
        this.productList.push(produit);
        this.saveDataInLocal(this.productList);
      }else if(data.length===0){
        produit.quantite++;
        this.productList.push(produit);
        this.saveDataInLocal(this.productList);
      }else{
      
        for(this.i=0 ; this.i<data.length; this.i++){
          if(produit.nom===data[this.i].nom){
            data[this.i].quantite=data[this.i].quantite+1;
          }else{
            produit.quantite++;
            this.productList.push(produit);
            this.saveDataInLocal(this.productList);
          }
        }
        
      }
    })
    
  }

}
