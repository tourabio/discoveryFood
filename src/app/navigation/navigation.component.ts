import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopCartService } from '../services/shopCart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  currentCart :any [];
  cartSubscription : Subscription;
  constructor(private shopCartService:ShopCartService) { 
  }

  ngOnInit(): void {
    this.cartSubscription = this.shopCartService.shopCartSubject.subscribe(
      (products:any[])=>{
        this.currentCart = products;
      }
    );
    this.shopCartService.emitShopCartSubject();
  }
  
  }




