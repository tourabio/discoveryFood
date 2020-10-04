import { Product } from '../model/Product';

export class ProductService{
    listProduct:Product[];

    constructor() {}
    affAllProducts(){
        this.listProduct=[
            {
              id:1,
              title:"T-shirt1",
              price:20,
              quantity:10,
              like:0
            },
            {
              id:2,
              title:"T-shirt2",
              price:10,
              quantity:0,
              like:0
            },
            {
              id:3,
              title:"T-shirt3",
              price:120,
              quantity:2,
              like:0
            },
          ];
          return this.listProduct;
    }
    incrementLike(i:number){
      this.listProduct[i].like++;
      
    }
    decrementQuantity(i:number){
      this.listProduct[i].quantity--;
      
    }
        

     
    


}