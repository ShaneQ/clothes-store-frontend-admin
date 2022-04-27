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
 import {UsersComponent} from "./users/users.component";
 import {ImageUploadComponent} from "./image-upload/image-upload.component";
 import {UserComponent} from "./user/user.component";
 import {BookingsComponent} from "./bookings/bookings.component";
 import {BookingComponent} from "./booking/booking.component";
 import {ProductsComponent} from "./products/products.component";

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
        component: ProductCreationComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'shop',
        component: ShopComponent,
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'user/:userId',
        component: UserComponent,
      },
      {
        path: 'bookings',
        component: BookingsComponent
      },
      {
        path: 'booing/:bookingId',
        component: BookingComponent,
      },
      {
        path: 'products',
        component: ProductsComponent
      },
    ]}
    ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes as Routes)],
  exports: [],
  providers: [CanAuthenticationGuard]
})
export class AppRoutingModule { }
