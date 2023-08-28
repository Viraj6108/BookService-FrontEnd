import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../Service/register.service';
import { LoginDto } from '../Model/registerInterface';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 errorMessage = '';
  user: any = {};
  showRegistrationForm : boolean = false
  validationErrors: any = {}; 
  constructor(private registrationService: RegisterService,private router : Router,private adminService : AdminService) {}

  ngOnInit()
  {
    this.loginSubmit
    this.registerForm
  }
  isloggedIn = false;
  registerForm(data: any) {
  
    this.registrationService.registerCustomer(data).subscribe(
      (response) => {
       
         this.router.navigate(['register']);
         alert("Registration Successful. LogIn");
        localStorage.setItem('email',data.email)
        localStorage.setItem('password',data.password)
        console.log('Registration successful:', response);

       
        // Example: this.router.navigate(['/home']);
      },
      (error) => {
        this.validationErrors = error;
        alert("Try with different email and Username");
      }
    );

 }

 toggleForm()
 {
    this.showRegistrationForm = !this.showRegistrationForm;
 }

 loginSubmit(loginDto : LoginDto)
 {
  this.registrationService.loginCustomer(loginDto).subscribe(
    (response: any) => {
      // Successful login
      console.log('Login successful:', response);
      this.router.navigate(['home']);
      const cId = response.id;
      localStorage.setItem('cId',cId)
      sessionStorage.setItem('email',loginDto.email)
      sessionStorage.setItem('password',loginDto.password)
      localStorage.setItem('role',response.role);
      this.isloggedIn = true;
    },
    (error) => {
        console.error('HTTP error:', error.error.message);  
        alert("Email or password is Incorrect");
    }
  );
  }

  Admin()
  {
    this.router.navigate(['adminLogin']);
  }
}
