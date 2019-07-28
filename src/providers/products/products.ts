import { Injectable } from '@angular/core';
import { products } from '../../modals/product-modal';
import { categories } from '../../modals/category-modal';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  product_list:products[];
  catList:products[];
  category_list:categories[];
  constructor() {
    this.catList=[];
    this.product_list=[{
      nom:"Chaussure addidas",
      mark:"Addidas",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos labore necessitatibus, tenetur omnis repudiandae illo reiciendis pariatur ratione similique saepe deserunt ipsa odit reprehenderit. Dicta delectus deserunt optio libero at.",
      images:[
        "../../assets/imgs/annonces/pub_addidas.jpg",
        "../../assets/imgs/annonces/pub_addidas.jpg",
        "../../assets/imgs/annonces/pub_addidas.jpg",
        "../../assets/imgs/annonces/pub_addidas.jpg",
      ],
      categorie:"Chaussures",
      price:10,
    },
    {
      nom:"Jacket Nike",
      mark:"Nike",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos labore necessitatibus, tenetur omnis repudiandae illo reiciendis pariatur ratione similique saepe deserunt ipsa odit reprehenderit. Dicta delectus deserunt optio libero at.",
      images:[
        "../../assets/imgs/annonces/jacket_nike.jpg",
        "../../assets/imgs/annonces/jacket_nike.jpg",
        "../../assets/imgs/annonces/jacket_nike.jpg",
        "../../assets/imgs/annonces/jacket_nike.jpg",
      ],
      categorie:"Vêtements",
      price:10
    },
    {
      nom:"Chaussure nike",
      mark:"Nike",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos labore necessitatibus, tenetur omnis repudiandae illo reiciendis pariatur ratione similique saepe deserunt ipsa odit reprehenderit. Dicta delectus deserunt optio libero at.",
      images:[
        "../../assets/imgs/annonces/",
        "../../assets/imgs/annonces/nike-colin.jpg",
        "../../assets/imgs/annonces/nike-colin.jpg",
        "../../assets/imgs/annonces/nike-colin.jpg",
      ],
      categorie:"Chaussures",
      price:10
    },
    {
      nom:"Jacket addidas",
      mark:"Addidas",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos labore necessitatibus, tenetur omnis repudiandae illo reiciendis pariatur ratione similique saepe deserunt ipsa odit reprehenderit. Dicta delectus deserunt optio libero at.",
      images:[
        "../../assets/imgs/annonces/jacket_addidas.jpg",
        "../../assets/imgs/annonces/jacket_addidas.jpg",
        "../../assets/imgs/annonces/jacket_addidas.jpg",
        "../../assets/imgs/annonces/jacket_addidas.jpg",
      ],
      categorie:"Vêtements",
      price:10
    }]
    this.category_list=[
      {
        nom:"Chaussures",
        image:"../../assets/imgs/categorieImg/sneakers.png",
        nbItem:10
      },
      {
        nom:"Vêtements",
        image:"../../assets/imgs/categorieImg/tshirt.png",
        nbItem:10
      },
      {
        nom:"Electronique",
        image:"../../assets/imgs/categorieImg/smartphone.svg",
        nbItem:10
      },
      {
        nom:"Beauté",
        image:"../../assets/imgs/categorieImg/diamond.png",
        nbItem:10
      }
    ]
    console.log('Hello ProductsProvider Provider');
  }

  getProductByCategory(cat:categories){

    for(let i=0; i<this.product_list.length ; i++)
    {
      if(this.product_list[i].categorie===cat.nom)
      {
        this.catList.push(this.product_list[i]);
      }
    }
  }

}
