import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainContentComponent,
    SingleCardComponent,
    CarouselComponent,
    SideBarComponent,
    AboutComponent,
    ShopCartComponent,
    AuthComponent,
    EditFoodComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
