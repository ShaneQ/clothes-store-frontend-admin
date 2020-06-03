import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { PreLoginComponent } from './pre-login/pre-login.component';
import { BaseComponent } from './base/base.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductCardComponent,
    HomeComponent,
    PreLoginComponent,
    BaseComponent,
    ProductDetailsComponent,
    FooterComponent,
    ProductDisplayComponent,
    NoPageFoundComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
