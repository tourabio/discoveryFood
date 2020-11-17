import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Food } from '../model/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foodSubject = new Subject<any[]>();
  private listFood:Food[];


  constructor() {
    this.listFood = [
      {
        id:1,
        name:"name",
        quantity:1,
        type:"breakfast",
        description:"description",
        image:"image",
        price:20,
        country:"country",
        livraison:true,
        like:4
      }
    



    ];


   }
   emitFoodSubject(){
    this.foodSubject.next(this.listFood.slice());
  }
  affAllFoods(){     
        return this.listFood;
  }

  incrementLike(i:number){
    this.listFood[i].like++;
    this.emitFoodSubject();
  }
  incrementQuantity(i:number){
    this.listFood[i].quantity++;
    this.emitFoodSubject();

  }
  deleteFood(i:number){
    this.listFood.splice(i, 1);  
    this.emitFoodSubject();
  }
  addFood(food:Food){
    food.like = 0;
    food.id = this.listFood[this.listFood.length-1].id+1 ;
    this.listFood.push(food);
    this.emitFoodSubject();

  } 

}
