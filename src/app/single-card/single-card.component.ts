import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { FoodService } from '../services/food.service';
import { ShopCartService } from '../services/shopCart.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  @Input() food:Product;
  @Input() position:number;
  constructor(private foodService:FoodService,
    private shopCartService:ShopCartService) { }
  
  
  ngOnInit(): void {
    
  }
  incrementLike(){
    this.foodService.incrementLike(this.position);
  }
  buy(){
    this.foodService.incrementQuantity(this.position);
    this.shopCartService.addToCart(this.food);
  }
  deleteFood(){
    this.foodService.deleteFood(this.position);
  }
}
