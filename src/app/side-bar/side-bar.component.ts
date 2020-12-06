import { Component, OnInit } from '@angular/core';
import { Food } from '../model/Food';
import { FoodService } from '../services/food.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  rangeValueMin:number;
  rangeValuemax:number;
  foods:Food[];
  constructor(private foodService:FoodService,
    private searchService:SearchService) { }

  ngOnInit(): void {
    
  }
  searchByCountry(country:string){
    console.log(country);
    this.foods = this.searchService.getFoods(this.foodService.affAllFoods(),"country",country);
    console.log(this.foods);
    this.foodService.setFoods(this.foods);
  }


  searchByType(type:string){
    console.log(type);
    if(type=="all"){
      this.resetSearch();
    }else{
    this.foods = this.searchService.getFoods(this.foodService.affAllFoods(),"type",type);
    console.log(this.foods);
    this.foodService.setFoods(this.foods);
  }
}





  resetSearch(){
    this.foodService.loadFoods();
  }

}