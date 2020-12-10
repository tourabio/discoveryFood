import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../model/Food';

@Injectable({
  providedIn: 'root'
})
export class DatacommunicationService {
  baseURL ="http://localhost:3000/foods/";
  
  constructor(private http: HttpClient) { }

  getAllFoods(){
    
    return this.http.get<Food[]>(this.baseURL);
  }

  deleteFood(id:string){
    return this.http.delete(this.baseURL + id);
  }

  addFood(f:Food){
    return this.http.post(this.baseURL,f);
  }

  putFood(f:Food,id:string){
    return this.http.put(this.baseURL+id,f);
  }





}
