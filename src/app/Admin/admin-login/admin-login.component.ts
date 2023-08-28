import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/Model/registerInterface';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

constructor(private adminService : AdminService,private router : Router)
{}


  adminLoginComponent(login :LoginDto)
{
  
  this.adminService.adminlogin(login).subscribe((res:any)=>
  {
    console.log(res);
    sessionStorage.setItem('email',login.email);
    sessionStorage.setItem('password',login.password);
    localStorage.setItem('role',res);
    this.router.navigate(['home'])

  })
 
}
}
