import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faEdit, faShoppingBasket, faThumbsUp, faTrashAlt, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Food } from '../model/Food';
import { AuthService } from '../services/auth.service';
import { FoodService } from '../services/food.service';
import { ShopCartService } from '../services/shopCart.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  @Input() food:Food;
  @Input() position:number;
  @Input() identifiant:number;
  @Output() notifLike = new EventEmitter<number>();
  @Output() notifdelete = new EventEmitter<number>();
  authSubscription : Subscription;
  isAuth:boolean;
  FathumbsUp = faThumbsUp;
  Fatruck = faTruck;

  shoppingbasket = faShoppingBasket;
  edit = faEdit;
  delete=faTrashAlt
  constructor(private foodService:FoodService,
    private shopCartService:ShopCartService,
    private authService:AuthService) { }
  
  
  ngOnInit(): void {
    this.authSubscription = this.authService.authSubject.subscribe(
      (auth)=>{
        this.isAuth = auth;
      }
    );
    this.authService.emitAuthSubject();
  }
  sendNotifIncrementLike(){
    this.notifLike.emit(this.identifiant);
  }
  buy(){
    this.shopCartService.addToCart(this.food);
  }
  deleteFood(){
    this.notifdelete.emit(this.position);
  }

  getColor(){
    if(this.food.livraison)return "green";
    return "red";
  }
}
