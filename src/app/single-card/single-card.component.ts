import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  @Input() product:Product;
  @Input() position:number;
  constructor(private productService:ProductService) { }
  
  
  ngOnInit(): void {
    
  }
  incrementLike(){
    this.productService.incrementLike(this.position);
  }
  decrementQuantity(){
    this.productService.decrementQuantity(this.position);
  }
}
