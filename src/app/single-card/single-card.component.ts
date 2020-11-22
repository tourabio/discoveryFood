import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Food } from '../model/Food';
import { Product } from '../model/Product';
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
  @Output() notifLike = new EventEmitter<number>();
  constructor(private foodService:FoodService,
    private shopCartService:ShopCartService) { }
  
  
  ngOnInit(): void {
    
  }
  sendNotifIncrementLike(){
    this.notifLike.emit(this.position);
    //this.foodService.incrementLike(this.position);
  }
  buy(){
    this.foodService.incrementQuantity(this.position);
    this.shopCartService.addToCart(this.food);
  }
  deleteFood(){
    this.foodService.deleteFood(this.position);
  }
}
