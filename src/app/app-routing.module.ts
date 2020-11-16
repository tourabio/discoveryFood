import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AboutComponent } from './about/about.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';

const ROUTES:Routes=[
  {path:'products',component:MainContentComponent},
  {path:'add',component:EditProductComponent},
  {path:'about',component:AboutComponent},
  {path:'shopCart',component:ShopCartComponent},
  {path:'',component:MainContentComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
