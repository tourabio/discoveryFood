import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { ShopCartService } from '../shared/shopCart.service';

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
    private authService:AuthService,
    private router: Router

    ) { 
  }

  ngOnInit(): void {
    this.cartSubscription = this.shopCartService.shopCartSubject.subscribe(
      (foods:any[])=>{
        this.currentCart = foods;
      }
    );

    this.shopCartService.emitShopCartSubject();


    //subscribe to the subscribtion of the authentification service to see if it is admin or a simple user   
    this.authSubscription = this.authService.authSubject.subscribe(
      (auth)=>{
        this.isAuth = auth;
      }
    );

    this.authService.emitAuthSubject();
    
  }


  logOut(){
    this.authService.signOut();
    this.router.navigate(['foods']);
  }
  
  }




