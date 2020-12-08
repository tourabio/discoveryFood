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
  foods:any[];
  constructor(private foodService :FoodService) { }
  

 

  ngOnInit(): void {
    this.p = 1;
    this.foodSubscription = this.foodService.foodSubject.subscribe(
      (foods:any[])=>{
        this.foods = foods;
      }
    );
    console.log("foods = ",this.foods);



    //this.foodService.emitFoodSubject();
  }

  incrementLike(pos:number){
    this.foodService.incrementLike(pos);
  }

  deleteFood(pos:number){
    this.foodService.deleteFood(pos);
  }

}
