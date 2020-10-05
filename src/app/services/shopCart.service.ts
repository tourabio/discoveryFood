import { Subject } from 'rxjs';
import { Product } from '../model/Product';

export class ShopCartService{
    shopCartSubject = new Subject<any[]>();
    private listProductCart:Product[];
    //totalPrice:number;
  
    constructor() {
      this.listProductCart=[
      ];
      //this.totalPrice=0; 
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
    //this.listProductCart[x].price+=p.price;
    
  }
    //this.totalPrice+=p.price;
    this.emitShopCartSubject();
    
  }  
  removeProduct(i:number){
    //this.totalPrice-=this.listProductCart[i].price*this.listProductCart[i].quantity;
    this.listProductCart.splice(i, 1);
    this.emitShopCartSubject();
  }
  
}
