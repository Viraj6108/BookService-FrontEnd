import { Component } from '@angular/core';
import { Orders } from 'src/app/Model/Order';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {

  adminOrders : Orders[] =[];
  constructor(private adminService : AdminService)
  {

  }

  ngOnInit()
  {
    this.getAllOrders();
  }


  getAllOrders()
  {
    this.adminService.getBooks().subscribe((res)=>
    {
      console.log(res);
      this.adminOrders= res;
    })
  }

}
