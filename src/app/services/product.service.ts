import { Subject } from 'rxjs';
import { Product } from '../model/Product';

export class ProductService{
    productSubject = new Subject<any[]>();
    private listProduct:Product[];

    constructor() {
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
    }
    emitProductSubject(){
      this.productSubject.next(this.listProduct.slice());
    }
    affAllProducts(){     
          return this.listProduct;
    }
    incrementLike(i:number){
      this.listProduct[i].like++;
      this.emitProductSubject();
    }
    decrementQuantity(i:number){
      this.listProduct[i].quantity--;
      this.emitProductSubject();
 
    }
    deleteProduct(i:number){
      this.listProduct.splice(i, 1);  
      this.emitProductSubject();
  
    }
    addProduct(product:Product){
      product.like = 0;
      product.id = this.listProduct[this.listProduct.length-1].id+1 ;
      this.listProduct.push(product);
      this.emitProductSubject();

    }    

     
    


}