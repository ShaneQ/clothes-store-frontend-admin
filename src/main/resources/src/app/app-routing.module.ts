import { NgModule } from '@angular/core';
import {BaseComponent} from './base/base.component';
import {RouterModule, Routes} from '@angular/router';
import {PreLoginComponent} from './pre-login/pre-login.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductDisplayComponent} from './product-display/product-display.component';
import {NoPageFoundComponent} from './no-page-found/no-page-found.component';

const routes: Routes = [
  { path: '', component: PreLoginComponent, pathMatch: 'full' },
  { path: 'base', component: BaseComponent },
  { path: 'product', component: ProductDetailsComponent },
  { path: 'product-display', component: ProductDisplayComponent, outlet: 'product-list'},
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes as Routes)],
  exports: []
})
export class AppRoutingModule { }
