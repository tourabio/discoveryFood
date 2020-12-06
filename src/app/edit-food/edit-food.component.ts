import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../model/Food';
import { FoodService } from '../services/food.service';

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
    if(this.id){
      this.food = this.foodService.getFoodById(+this.id);
      this.actionName = "Edit";
    }else{
      this.actionName = "Add";
    }
    console.log(this.food);
  }
  addFood() {
    this.food.image = this.fileName;
    if(this.id){
      this.foodService.updateFood(this.food);
    }else{
    console.log(this.food);
    this.foodService.addFood(this.food);
    
  }
  //this.router.navigate(['foods']);
  }
  onFileSelected(event){
    this.fileName = event.target.files[0].name;
  }

}
