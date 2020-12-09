import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Food } from '../model/Food';
import { DatacommunicationService } from './datacommunication.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foodSubject = new Subject<any[]>();
  private listFood:Food[];
  
  

  constructor(private dbCom:DatacommunicationService) {

    this.loadFoods();
    console.log("listFoodInitial : ",this.listFood);

   }

   loadFoods(){
    const myObserver = {
      next: x => {this.listFood = x;},
      error: err => console.error('Observer got an error: ' + err),
      complete: () => {
        console.log("listFood : ",this.listFood);
        this.emitFoodSubject();
      },
    };

     this.dbCom.getAllFoods().subscribe(
      myObserver  
     );
    
   }








   emitFoodSubject(){
    console.log("listFood emit : ", this.listFood);
    this.foodSubject.next(this.listFood.slice());
  }



  affAllFoods(){   
    //this.loadFoods(); to fix next time
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
      
    
 this.dbCom.deleteFood(this.listFood[i].id.toString()).subscribe(
  {
    next: x => {this.listFood = this.listFood.filter(emp=>emp.id!=this.listFood[i].id)},
    error: err => console.error('Observer got an error: ' + err),
    complete: () => {
      console.log("listFood : ",this.listFood);
      this.emitFoodSubject();
    },
  }
 );
   
  }



  addFood(food:Food){
    food.like = 0;
   // food.id = this.listFood[this.listFood.length-1].id+1 ;
   // this.listFood.push(food);
   this.dbCom.addFood(food).subscribe(
    {
      next: x => { this.listFood = [food,...this.listFood]},
      error: err => console.error('Observer got an error: ' + err),
      complete: () => {
        console.log("listFood : ",this.listFood);
        this.emitFoodSubject();
      },
    }
   );




   // this.emitFoodSubject();
  } 






  updateFood(editedfood:Food){
    this.dbCom.putFood(editedfood,editedfood.id.toString()).subscribe(
    );


   /* this.listFood.forEach(food => {
      if(food.id == editedfood.id){
        food = editedfood;
      }
    });*/


  }

  getFoodById(index:number){
    return this.listFood.find(x=>x.id===index);
}
setFoods(foods:Food[]){
  this.listFood = foods;
  this.emitFoodSubject();
}

}
