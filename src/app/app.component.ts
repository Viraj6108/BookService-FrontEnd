import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from './Service/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineBookService';
 isLoggedIn : boolean = false;
 isAdmin = false;
  constructor(public service  : RegisterService, private router : Router){}
  
  ngOnInit()
  {
   
  this.checkUserRole();
  }
 



checkUserRole() {
  const userRole = localStorage.getItem('role');
  console.log("userRole :", userRole);
  if (userRole && userRole.toLowerCase() === 'admin') {
    this.isAdmin = true;
  } else {
    this.isAdmin = false;
  }

 
}
 





}
