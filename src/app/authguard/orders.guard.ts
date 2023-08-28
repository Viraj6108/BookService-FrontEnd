import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersGuard implements CanActivate {
  constructor(private router : Router) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const userRole = localStorage.getItem('role');

      if (userRole === 'Admin') {
        this.router.navigate(['admin-order']); // Navigate to the admin orders page
      } else {
        this.router.navigate(['order']); // Navigate to the customer orders page
      }
    
      return false; 
  }
  
}
