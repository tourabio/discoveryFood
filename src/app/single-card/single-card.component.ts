import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faEdit, faShoppingBasket, faThumbsUp, faTrashAlt, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Food } from '../model/Food';
import { AuthService } from '../shared/auth.service';
import { FoodService } from '../shared/food.service';
import { ShopCartService } from '../shared/shopCart.service';

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
  likeClicked:boolean;

  shoppingbasket = faShoppingBasket;
  edit = faEdit;
  delete=faTrashAlt
  constructor(private foodService:FoodService,
    private shopCartService:ShopCartService,
    private authService:AuthService) { }
  
  
  ngOnInit(): void {
    this.likeClicked=false;
        //subscribe to the subscribtion of the authentification service to see if it is admin or a simple user   
        //if it is admin he will have an additional options such as edit , delete,or add a new food !
    this.authSubscription = this.authService.authSubject.subscribe(
      (auth)=>{
        this.isAuth = auth;
      }
    );
    this.authService.emitAuthSubject();
  }
  sendNotifIncrementLike(){
    //deny the multiple click of like button
    if(!this.likeClicked){
    this.notifLike.emit(this.identifiant);
    this.likeClicked=true;
  }
  }
  buy(){
    this.shopCartService.addToCart(this.food);
  }
  deleteFood(){
    this.notifdelete.emit(this.identifiant);
  }

  getColor(){
    console.log(this.food.livraison);
    if(this.food.livraison==true)return "green";
    else return "red";
  }
}
