import { Component, OnInit } from '@angular/core';
import{NgForm} from "@angular/forms";
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product;
  constructor(private productService:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.product = new Product();
  }
  onSubmit(form :NgForm){
    this.product.price = form.value['price'];
    this.product.quantity = form.value['quantity'];
    this.product.title = form.value['title'];
    this.productService.addProduct(this.product);
    this.router.navigate(['/products']);
  }
}
