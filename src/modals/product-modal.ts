export interface products{
    nom:string;
    mark:string;
    description:string;
    price:number;
    categorie:string;
    reduction ?:number;
    images:string[];
    quantite:number;
}