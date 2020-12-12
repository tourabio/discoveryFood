import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Food } from '../model/Food';
import { DatacommunicationService } from './datacommunication.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
//there is an abstraction beteween the service and the components, where the data are up to date because of Subject.
  foodSubject = new Subject<any[]>();
  private listFood:Food[];
//DatacommunicationService is the service in which we communicate with the data base
  constructor(private dbCom:DatacommunicationService) {

    this.loadFoods();
   }
//emitFoodSubject when the data are completely loaded by the observer 
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
   return this.listFood;
  }

  incrementLike(id:number){
    console.log("id : ",id);
    var food = this.listFood.find(x=>x.id===id);
    food.like++;
    console.log
    this.dbCom.putFood(food,id.toString()).subscribe(
      {
        next: x => {},
        error: err => console.error('Observer got an error: ' + err),
        complete: () => {
          console.log("editedFoodLike : ",food);
          this.emitFoodSubject();
        },
      }


      );
  }
  //the field quantity in food is just for the client side of the app and it will never be saved in the database(allways =1)
  incrementQuantity(i:number){
    this.listFood[i].quantity++;
    this.emitFoodSubject();
  }

  //used when the client click the button remove on the cart page
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
  } 

  updateFood(editedfood:Food){
    this.dbCom.putFood(editedfood,editedfood.id.toString()).subscribe(
      {
        next: x => {},
        error: err => console.error('Observer got an error: ' + err),
        complete: () => {
          console.log("editedFood : ",editedfood);
          this.emitFoodSubject();
        },
      }
    );
  }

  getFoodById(index:number){
    return this.listFood.find(x=>x.id===index);
}

//used in the search work
setFoods(foods:Food[]){
  this.listFood = foods;
  this.emitFoodSubject();
}

}
