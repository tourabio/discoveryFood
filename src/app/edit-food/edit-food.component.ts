import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../model/Food';
import { FoodService } from '../shared/food.service';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {
  actionName: string
  food: Food;
  id: number;
  fileName:string;
  constructor(private foodService: FoodService,
    private router: Router,
    private serviceRoute: ActivatedRoute    ) { }
 
  ngOnInit(): void {
    this.food = new Food();
    this.id = this.serviceRoute.snapshot.params.id;
    //testing whether we will add or edit a food using the existence of the parameter id as an indicator
    if(this.id){
      this.food = this.foodService.getFoodById(+this.id);
      //change the button value
      this.actionName = "Edit";
    }else{
      this.actionName = "Add";
    }
    console.log(this.food);
  }

  addFood() {
    if(this.id){
      if(this.fileName){
        this.food.image = this.fileName;
      }
      this.foodService.updateFood(this.food);
    }else{
            if(this.fileName){
            this.food.image = this.fileName;
          }
            else{
              //use a default image for food
              this.food.image = "default.jpg";
            }
      console.log(this.food);
    this.foodService.addFood(this.food);  
  }
  this.router.navigate(['foods']);
  }

  //listen to the event of choose file and get the file's name
  onFileSelected(event){
    this.fileName = event.target.files[0].name;
  }

}
