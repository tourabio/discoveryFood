import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ShopCartService } from '../services/shopCart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  currentCart :any [];
  faShop = faShoppingCart;
  isAuth:boolean;
  cartSubscription : Subscription;
  authSubscription : Subscription;
  constructor(private shopCartService:ShopCartService,
    private authService:AuthService) { 
  }

  ngOnInit(): void {
    this.cartSubscription = this.shopCartService.shopCartSubject.subscribe(
      (foods:any[])=>{
        this.currentCart = foods;
      }
    );

    this.shopCartService.emitShopCartSubject();



    this.authSubscription = this.authService.authSubject.subscribe(
      (auth)=>{
        this.isAuth = auth;
      }
    );

    this.authService.emitAuthSubject();
    
  }
  logOut(){
    this.authService.signOut();
  }
  
  }




