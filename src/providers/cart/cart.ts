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
    console.log('ok');
    if(this.productList.length==0){
      produit.quantite= produit.quantite + 1;
      this.productList.push(produit);
      console.log(this.productList);
    }else{
      for(let i=0; i<this.productList.length ; i++){
      
        if(this.productList[i].nom===produit.nom){
          this.productList[i].quantite = this.productList[i].quantite + 1;
          console.log(this.productList);
        }else{
          produit.quantite= produit.quantite + 1;
          this.productList.push(produit);
          console.log(this.productList);
        }
      }
    }
    
    
  }

}
