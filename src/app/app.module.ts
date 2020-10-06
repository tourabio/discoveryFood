import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductService } from './services/product.service';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule } from '@angular/forms';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ShopCartService } from './services/shopCart.service';
import { SingleShopCartComponent } from './single-shop-cart/single-shop-cart.component';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const appRoutes:Routes=[
  {path:'products',component:MainContentComponent},
  {path:'add',component:EditProductComponent},
  {path:'about',component:AboutComponent},
  {path:'shopCart',component:ShopCartComponent},
  {path:'',component:MainContentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainContentComponent,
    SingleCardComponent,
    CarouselComponent,
    SideBarComponent,
    AboutComponent,
    EditProductComponent,
    ShopCartComponent,
    SingleShopCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ProductService,
    ShopCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
