import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { LandingComponent } from './pre-login/landing/landing.component';
import { BaseComponent } from './base/base.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountNavComponent } from './partials/account-nav/account-nav.component';
import { HeadComponent } from './partials/head/head.component';
import { DropdownCatalogComponent } from './partials/dropdown-catalog/dropdown-catalog.component';
import { DropdownHomeComponent } from './partials/dropdown-home/dropdown-home.component';
import { DropdownPagesComponent } from './partials/dropdown-pages/dropdown-pages.component';
import { NewsletterHorizontalComponent } from './partials/modal/newsletter-horizontal/newsletter-horizontal.component';
import { NewsletterPasswordResetComponent } from './partials/modal/newsletter-password-reset/newsletter-password-reset.component';
import { ProductComponent } from './partials/modal/product/product.component';
import { SearchComponent } from './partials/modal/search/search.component';
import { ShoppingCartComponent } from './partials/modal/shopping-cart/shopping-cart.component';
import { SideBarComponent } from './partials/modal/side-bar/side-bar.component';
import { SizeChartComponent } from './partials/modal/size-chart/size-chart.component';
import { WaitListComponent } from './partials/modal/wait-list/wait-list.component';
import { PromoComponent } from './partials/promo/promo.component';
import { NavbarLandingComponent } from './pre-login/navbar-landing/navbar-landing.component';
import { ShopCategoriesComponent } from './shop-categories/shop-categories.component';
import { ShopLoadMoreComponent } from './shop-load-more/shop-load-more.component';
import { ShopComponent } from './shop/shop.component';
import { ShopFilterComponent } from './shop-filter/shop-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDatepickerModule, DatePickerComponent} from 'ngx-bootstrap/datepicker';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductCardComponent,
    HomeComponent,
    LandingComponent,
    BaseComponent,
    ProductDetailsComponent,
    FooterComponent,
    NoPageFoundComponent,
    HeaderComponent,
    LoadingComponent,
    NavbarComponent,
    AccountNavComponent,
    HeadComponent,
    DropdownCatalogComponent,
    DropdownHomeComponent,
    DropdownPagesComponent,
    NewsletterHorizontalComponent,
    NewsletterPasswordResetComponent,
    ProductComponent,
    SearchComponent,
    ShoppingCartComponent,
    SideBarComponent,
    SizeChartComponent,
    WaitListComponent,
    PromoComponent,
    NavbarLandingComponent,
    ShopCategoriesComponent,
    ShopLoadMoreComponent,
    ShopComponent,
    ShopFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
