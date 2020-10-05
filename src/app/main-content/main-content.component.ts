import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  p: number 
  productSubscription : Subscription ;

  constructor(private productService :ProductService) { }
  products:any[];
  arrayOne(n: number): any[] {
    return Array(n);
  }
  ngOnInit(): void {
    this.p = 1;
    this.productSubscription = this.productService.productSubject.subscribe(
      (products:any[])=>{
        this.products = products;
      }
    );
    this.productService.emitProductSubject();
  }
 
}
