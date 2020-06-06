import { NgModule } from '@angular/core';
import {BaseComponent} from './base/base.component';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './pre-login/landing/landing-component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductDisplayComponent} from './product-display/product-display.component';
import {HomeComponent} from './home/home.component';
import {LoadingComponent} from './loading/loading.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'base', component: BaseComponent,
    children: [
      {
        path: 'product-display', // child route path
        component: ProductDisplayComponent // child route component that the router renders
      },
      {
        path: 'home', // child route path
        component: HomeComponent // child route component that the router renders
      }
    ]},
  { path: 'product', component: ProductDetailsComponent },
  { path: 'products', component: ProductDisplayComponent},
  { path: 'loading', component: LoadingComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes as Routes)],
  exports: []
})
export class AppRoutingModule { }
