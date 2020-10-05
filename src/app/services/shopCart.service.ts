import { Subject } from 'rxjs';
import { Product } from '../model/Product';

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
    /*this.listProductCart.push(p);
    this.emitShopCartSubject();*/
    console.log('x:',x);


    
    if(x==-1){
    this.listProductCart.push(p);
  }else{
    this.listProductCart[x].quantity++;
    this.listProductCart[x].price+=p.price;
  }
  console.log(this.listProductCart);
    this.emitShopCartSubject();
    
  }  




}
