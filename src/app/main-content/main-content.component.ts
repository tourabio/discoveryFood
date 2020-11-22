import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  p: number 
  foodSubscription : Subscription ;

  constructor(private foodService :FoodService) { }
  foods:any[];
  arrayOne(n: number): any[] {
    return Array(n);
  }
  ngOnInit(): void {
    this.p = 1;
    this.foodSubscription = this.foodService.foodSubject.subscribe(
      (foods:any[])=>{
        this.foods = foods;
      }
    );
    this.foodService.emitFoodSubject();
  }

  incrementLike(pos:number){
    this.foodService.incrementLike(pos);
  }

}
