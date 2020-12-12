import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodService } from '../shared/food.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit,OnDestroy {
  p: number 
  //it's highly required to save  the subscription into an object Subscription (import it from rxjs/Subscription)
  //so you can unsubscribe when the component is destroyed
  foodSubscription : Subscription ;
  foods:any[];
  constructor(private foodService :FoodService) { }
  
  ngOnInit(): void {
    this.p = 1;

    this.foodSubscription = this.foodService.foodSubject.subscribe(
      (foods:any[])=>{
        this.foods = foods;
      }
    );
      console.log("this.foods : ",this.foods);


      
    this.foodService.emitFoodSubject();
  }

  incrementLike(id:number){
    this.foodService.incrementLike(id);
  }

  deleteFood(pos:number){
    this.foodService.deleteFood(pos);
  }

  ngOnDestroy() {
    this.foodSubscription.unsubscribe();
  }





}
