import { Component, OnInit } from '@angular/core';
import { Food } from '../model/Food';
import { FoodService } from '../shared/food.service';
import { SearchService } from '../shared/search.service';

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
  //search by country and by type use the same search function but with different criteria 


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
    console.log("search result : ", this.foods);
    this.foodService.setFoods(this.foods);
  }
}



  //if button reset or option all clicked

  resetSearch(){
    this.foodService.loadFoods();
  }

}