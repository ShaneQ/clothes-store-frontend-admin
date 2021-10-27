 import { NgModule } from '@angular/core';
import {BaseComponent} from './base/base.component';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './pre-login/landing/landing.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {CanAuthenticationGuard} from './app-auth.guard';
import {ProfileComponent} from './profile/profile.component';
 import {ProductCreationComponent} from "./product-creation/product-creation.component";

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'base', component: BaseComponent,
    canActivate: [CanAuthenticationGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'product',
        component: ProductCreationComponent,
      },
      {
        path: 'product/:productId',
        component: ProductDetailsComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      }
    ]}
    ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes as Routes)],
  exports: [],
  providers: [CanAuthenticationGuard]
})
export class AppRoutingModule { }
