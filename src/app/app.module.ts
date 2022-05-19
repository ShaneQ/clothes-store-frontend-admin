import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ApplicationRef, DoBootstrap, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {LandingComponent} from './pre-login/landing/landing.component';
import {BaseComponent} from './base/base.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {FooterComponent} from './footer/footer.component';
import {NoPageFoundComponent} from './no-page-found/no-page-found.component';
import {HeaderComponent} from './header/header.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AccountNavComponent} from './partials/account-nav/account-nav.component';
import {HeadComponent} from './partials/head/head.component';
import {DropdownCatalogComponent} from './partials/dropdown-catalog/dropdown-catalog.component';
import {DropdownHomeComponent} from './partials/dropdown-home/dropdown-home.component';
import {DropdownPagesComponent} from './partials/dropdown-pages/dropdown-pages.component';
import {NewsletterHorizontalComponent} from './partials/modal/newsletter-horizontal/newsletter-horizontal.component';
import {NewsletterPasswordResetComponent} from './partials/modal/newsletter-password-reset/newsletter-password-reset.component';
import {ProductComponent} from './partials/modal/product/product.component';
import {SearchComponent} from './partials/modal/search/search.component';
import {ShoppingCartComponent} from './partials/modal/shopping-cart/shopping-cart.component';
import {SideBarComponent} from './partials/modal/side-bar/side-bar.component';
import {SizeChartComponent} from './partials/modal/size-chart/size-chart.component';
import {WaitListComponent} from './partials/modal/wait-list/wait-list.component';
import {PromoComponent} from './partials/promo/promo.component';
import {NavbarLandingComponent} from './pre-login/navbar-landing/navbar-landing.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDatepickerModule, DatepickerModule} from 'ngx-bootstrap/datepicker';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {ProfileComponent} from './profile/profile.component';
import {environment} from '../environments/environment';
import {IconsModule} from './icons/icons.module';
import {MemberNotificationSlowDownComponent} from './modal/member-notification-slow-down/member-notification-slow-down.component';
import {BookingSummaryComponent} from './modal/booking-summary/booking-summary.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductCreationComponent} from './product-creation/product-creation.component';
import {DataTablesModule} from "angular-datatables";
import { UsersComponent } from './users/users.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import {initializeKeycloak} from "./init/keycloak-init.factory";
import { UserComponent } from './user/user.component';
import { BookingComponent } from './booking/booking.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ProductsComponent } from './products/products.component';

const keycloakService = new KeycloakService();

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    LandingComponent,
    BaseComponent,
    ProductDetailsComponent,
    FooterComponent,
    NoPageFoundComponent,
    HeaderComponent,
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
    ProfileComponent,
    MemberNotificationSlowDownComponent,
    BookingSummaryComponent,
    ProductCreationComponent,
    UsersComponent,
    ImageUploadComponent,
    UserComponent,
    BookingComponent,
    BookingsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    KeycloakAngularModule,
    IconsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
    DataTablesModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, BookingSummaryComponent],

})
export class AppModule  {

}

