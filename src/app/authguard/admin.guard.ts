import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router : Router)
  {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     if(localStorage.getItem('role') == 'Admin')
  //     {
  //       return true;
  //     }
  //   return false;
  // }
  const userrole = localStorage.getItem('role');
  if(userrole && userrole.toLowerCase()=== 'admin')
  {
    return true;
  }
  else{
    this.router.navigate(['order']);
    return false;
  }
  
    }
  }
