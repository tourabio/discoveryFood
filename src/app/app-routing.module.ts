import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { AboutComponent } from './about/about.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const ROUTES:Routes=[
  {path:'',redirectTo:"/foods",pathMatch:"full"},
  {path:'foods',/* canActivate: [AuthGuardService],*/component:MainContentComponent},
  { path: 'auth', component: AuthComponent },
  {path:'about',component:AboutComponent},
  {path:'add',canActivate: [AuthGuardService],component:EditFoodComponent},
  {path:'foods/edit/:id',canActivate: [AuthGuardService],component:EditFoodComponent},
  {path:'shopCart',component:ShopCartComponent},
  {path:'**',component:PageNotFoundComponent},

  
  
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
