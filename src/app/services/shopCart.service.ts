import { Subject } from 'rxjs';
import { Product } from '../model/Product';
import * as $ from 'jquery'
export class ShopCartService{
    shopCartSubject = new Subject<any[]>();
    private listProductCart:Product[];
  
    constructor() {
      this.listProductCart=[
      ];
    }
    emitShopCartSubject(){
      this.shopCartSubject.next(this.listProductCart.slice());
    }
   
    affAllCarts(){   
        return this.listProductCart;
  }

  addToCart(p:Product){
     var x:number = -1;
    for (let i = 0; i < this.listProductCart.length; i++) {
      if(this.listProductCart[i].id==p.id){
        x=i;
        break;
      }
    }
    if(x==-1){
    this.listProductCart.push(p);
  }else{
    this.listProductCart[x].quantity++;
    
  }
    this.emitShopCartSubject();
    
  }  
  removeProduct(i:number){
    this.listProductCart.splice(i, 1);
    this.emitShopCartSubject();
  }
  removeAll(){
    this.listProductCart = [];
    this.emitShopCartSubject();
  }
  
}
