import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './Customer/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { Router } from '@angular/router';
import { CartComponent } from './Customer/cart/cart.component';
import { OrderComponent } from './Customer/order/order.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { ProductComponent } from './Admin/product/product.component';
import { ProfileComponent } from './Customer/profile/profile.component';
import { AdminOrdersComponent } from './Admin/admin-orders/admin-orders.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    CartComponent,
    OrderComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    ProductComponent,
    ProfileComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
