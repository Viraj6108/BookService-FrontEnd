import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from 'src/app/Service/register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service : RegisterService, private router : Router){}
  canActivate() : boolean
    {
      if(sessionStorage.getItem('email') && sessionStorage.getItem('password'))
      {
       
        return true;
      }

      this.router.navigate(['register']);
   return false;
  }
  
}
