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
    this.loadFoods();
    
   }

   loadFoods(){
    this.listFood = [
      {
        id:1,
        name:"brik",
        quantity:1,
        type:"lunch",
        description:"description",
        image:"brik.jpg",
        price:20,
        country:"france",
        livraison:true,
        like:4
      },
      {
        id:2,
        name:"fkhadh",
        quantity:1,
        type:"breakfast",
        description:"description",
        image:"fkhadh.jpg",
        price:20,
        country:"spain",
        livraison:false,
        like:4
      }
    ];

    this.emitFoodSubject();
   }








   emitFoodSubject(){
    this.foodSubject.next(this.listFood.slice());
  }



  affAllFoods(){   
    this.loadFoods();
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

  
  resetQuantity(id:number){
    this.listFood.forEach(food => {
      if(food.id == id){food.quantity = 1;}
    });
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
  updateFood(editedfood){
    this.listFood.forEach(food => {
      if(food.id == editedfood.id){
        food = editedfood;
      }
    });
  }

  getFoodById(index:number){
    return this.listFood.find(x=>x.id===index);
}
setFoods(foods:Food[]){
  this.listFood = foods;
  this.emitFoodSubject();
}

}
