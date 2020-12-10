import { Injectable } from '@angular/core';
import { Food } from '../model/Food';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  getFoods(List:Food[], criteria:string, value:any){
    let foodList=[];
    for (let i in List){
      if(List[i][criteria] === value){
        foodList.push(List[i]);
      }
    }
    return foodList;
  }
}
