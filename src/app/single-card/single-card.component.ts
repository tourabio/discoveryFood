import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';
import { ShopCartService } from '../services/shopCart.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  @Input() product:Product;
  @Input() position:number;
  constructor(private productService:ProductService,
    private shopCartService:ShopCartService) { }
  
  
  ngOnInit(): void {
    
  }
  incrementLike(){
    this.productService.incrementLike(this.position);
  }
  buy(){
    this.productService.decrementQuantity(this.position);
    const myProduct = new Product(this.product.id,this.product.title,this.product.price,this.product.like);
    console.log('myProduct : ',myProduct);
    this.shopCartService.addToCart(myProduct);
  }
  deleteProduct(){
    this.productService.deleteProduct(this.position);
  }
}
