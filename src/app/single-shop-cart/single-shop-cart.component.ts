import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-single-shop-cart',
  templateUrl: './single-shop-cart.component.html',
  styleUrls: ['./single-shop-cart.component.css']
})
export class SingleShopCartComponent implements OnInit {
  @Input() product : Product;
  @Input() position:number;
  constructor() { }

  ngOnInit(): void {
  }

}
