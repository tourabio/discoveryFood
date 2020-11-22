import { Subject } from 'rxjs';
import * as $ from 'jquery'
import { Food } from '../model/Food';
export class ShopCartService{
    shopCartSubject = new Subject<any[]>();
    private listFoodCart:Food[];
  
    constructor() {
      this.listFoodCart=[
      ];
    }
    emitShopCartSubject(){
      this.shopCartSubject.next(this.listFoodCart.slice());
    }
   
    affAllCarts(){   
        return this.listFoodCart;
  }

  addToCart(p:Food){
     var x:number = -1;
    for (let i = 0; i < this.listFoodCart.length; i++) {
      if(this.listFoodCart[i].id==p.id){
        x=i;
        break;
      }
    }
    if(x==-1){
    this.listFoodCart.push(p);
  }else{
    this.listFoodCart[x].quantity++;
    
  }
    this.emitShopCartSubject();
    
  }  


  removeFood(i:number){
    this.listFoodCart.splice(i, 1);
    this.emitShopCartSubject();
  }



  removeAll(){
    this.listFoodCart = [];
    this.emitShopCartSubject();
  }
  
}
