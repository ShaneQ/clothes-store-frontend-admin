import { NgModule } from '@angular/core';
import {BaseComponent} from './base/base.component';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './pre-login/landing/landing.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {HomeComponent} from './home/home.component';
import {LoadingComponent} from './loading/loading.component';
import {ShopTopbarComponent} from './shop-topbar/shop-topbar.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'base', component: BaseComponent,
    children: [
      {
        path: 'product/:productId', // child route path
        component: ProductDetailsComponent // child route component that the router renders
      },
      {
        path: 'home', // child route path
        component: HomeComponent // child route component that the router renders
      },
      {
        path: 'shop', // child route path
        component: ShopTopbarComponent // child route component that the router renders
      }
    ]},
  { path: 'loading', component: LoadingComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes as Routes)],
  exports: []
})
export class AppRoutingModule { }
