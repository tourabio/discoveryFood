import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../model/Product';
import { ShopCartService } from '../services/shopCart.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  shopSubscription : Subscription;
  products:Product[];
  totalPrice:number;
  constructor(private shopCartService:ShopCartService) { }

  ngOnInit(): void {
    this.shopSubscription = this.shopCartService.shopCartSubject.subscribe(
      (products:any[])=>{
        this.products = products;
      }
    );
    this.shopCartService.emitShopCartSubject();
    this.totalPrice = 0;
    this.products.forEach(product => {
      this.totalPrice += product.price*product.quantity ;
    });
    
  }
  removeFromShop(i:number){
    this.totalPrice-=this.products[i].quantity*this.products[i].price;
    this.shopCartService.removeProduct(i);
  }



}
