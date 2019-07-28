import { products } from "./product-modal";

export interface cart{
    product:products[];
    nbItem:number;
    totalPrice:number;
}