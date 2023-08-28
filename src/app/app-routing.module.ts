import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/authguard/auth.guard';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminOrdersComponent } from './Admin/admin-orders/admin-orders.component';
import { ProductComponent } from './Admin/product/product.component';
import { AdminGuard } from './authguard/admin.guard';
import { OrdersGuard } from './authguard/orders.guard';
import { CartComponent } from './Customer/cart/cart.component';
import { HomeComponent } from './Customer/home/home.component';
import { OrderComponent } from './Customer/order/order.component';
import { ProfileComponent } from './Customer/profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent,
    
  },
  {
    path : 'register',
    component : RegisterComponent,
    
  },
  {
    path : 'cart',
    component : CartComponent,
    canActivate : [AuthGuard]
    
  }
  ,{
    path : 'order',
    component : OrderComponent,
    canActivate : [AuthGuard] 
  
  },
  {
    path : 'adminHome',
    component : AdminHomeComponent
  },
  {
    path : 'adminLogin',
    component : AdminLoginComponent
  },
  {
    path : 'product',
    component : ProductComponent,
    canActivate : [AdminGuard]
  }
  ,{
    path: 'profile',
    component : ProfileComponent,
    canActivate : [AuthGuard]
  }
  ,{path : 'admin-order', component : AdminOrdersComponent,canActivate:[AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
