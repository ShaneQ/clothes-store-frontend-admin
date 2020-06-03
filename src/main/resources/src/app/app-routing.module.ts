import { NgModule } from '@angular/core';
import {BaseComponent} from "./base/base.component";
import {RouterModule, Routes} from "@angular/router";
import {PreLoginComponent} from "./pre-login/pre-login.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductDisplayComponent} from "./product-display/product-display.component";

const routes: Routes = [
  { path: 'base', component: BaseComponent },
  { path: 'product', component: ProductDetailsComponent },
  { path: 'product-display', component: ProductDisplayComponent},
  { path: '', component: PreLoginComponent, pathMatch: 'full' }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(<Routes>routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
