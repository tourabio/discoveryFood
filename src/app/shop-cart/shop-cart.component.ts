import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopCartService } from '../services/shopCart.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { Food } from '../model/Food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit,OnDestroy  {

  shopSubscription : Subscription;
  foods:Food[];
  totalPrice:number;
  constructor(private shopCartService:ShopCartService,
    private foodService:FoodService,
    private router:Router) { }
    
  ngOnInit(): void {
    this.shopSubscription = this.shopCartService.shopCartSubject.subscribe(
      (foods:any[])=>{
        this.foods = foods;
      }
    );
    this.shopCartService.emitShopCartSubject();

    this.totalPrice = 0;

    this.foods.forEach(food => {
      this.totalPrice += food.price*food.quantity ;
    });
    
  }

  ngOnDestroy(){
  }


  
  removeFromShop(i:number){
    this.totalPrice-=this.foods[i].quantity*this.foods[i].price;
    this.foodService.resetQuantity(this.foods[i].id);
    this.shopCartService.removeFood(i);
  }

   
   




  downloadPdf(){
    

    $('#table tr').each(function(){
      $(this).children('td').eq(5).remove();
  });

    var element = document.getElementById("content");




    html2canvas(element).then((canvas)=>{
      var imgData = canvas.toDataURL('image/png');
      var doc = new jsPDF('p','mm','a4');
      var imgHeight = canvas.height* 208/canvas.width;
      doc.addImage(imgData,0,0,208,imgHeight);
      doc.save("bill.pdf");
    });

    this.foods.forEach(food => {
      this.foodService.resetQuantity(food.id);
    });

    this.totalPrice = 0;
    this.shopCartService.removeAll(); 


    this.router.navigate(['/foods']);
    
    
    


  }


}
