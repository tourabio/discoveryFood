import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../model/Product';
import { ShopCartService } from '../services/shopCart.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit,OnDestroy  {

  shopSubscription : Subscription;
  products:Product[];
  totalPrice:number;
  constructor(private shopCartService:ShopCartService,
    private router:Router) { }
    
  ngOnInit(): void {
    this.shopSubscription = this.shopCartService.shopCartSubject.subscribe(
      (products:any[])=>{
        this.products = products;
      }
    );
    this.shopCartService.emitShopCartSubject();
    this.totalPrice = 0;
    this.products.forEach(product => {
      this.totalPrice += product.price*product.quantity ;
    });
    
  }

  ngOnDestroy(){
  }


  








  removeFromShop(i:number){
    this.totalPrice-=this.products[i].quantity*this.products[i].price;
    this.shopCartService.removeProduct(i);
  }

   
   




  downloadPdf(){
    

    $('#table tr').each(function(){
      $(this).children('td').eq(4).remove();
  });

    var element = document.getElementById("content");




    html2canvas(element).then((canvas)=>{
      var imgData = canvas.toDataURL('image/png');
      var doc = new jsPDF('p','mm','a4');
      var imgHeight = canvas.height* 208/canvas.width;
      doc.addImage(imgData,0,0,208,imgHeight);
      doc.save("bill.pdf");
    });



    this.totalPrice = 0;
    this.shopCartService.removeAll(); 


    this.router.navigate(['/products']);


  }


}
