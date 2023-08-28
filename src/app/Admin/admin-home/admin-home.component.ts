import { Component } from '@angular/core';
import { LoginDto } from 'src/app/Model/registerInterface';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

constructor(private adminService : AdminService)
{}
ngOnInit()
{

}



}
