import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginDto } from '../Model/registerInterface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  

  constructor(private http : HttpClient,private router : Router) { }

  registerCustomer(data : any)
  {
     return this.http.post ('http://localhost:8081/register',data).pipe(
      catchError(this.handleRegistrationError)
    );

  }
  private handleRegistrationError(error: HttpErrorResponse) {
    if (error.status === 400) {
      // Validation errors occurred, pass them to the component
      return throwError(error.error.errors);
    } else {
      // Handle other errors here
      return throwError('An error occurred');
    }
  }

  // login Service
 isLoggedIn = false
  loginCustomer (loginDto : LoginDto) {
    this.isLoggedIn = true;
  return this.http.post('http://localhost:8081/login',loginDto)
  
  }

  logout()
  {
    this.isLoggedIn = false;
  }

 
}
