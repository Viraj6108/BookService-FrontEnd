import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../Model/Book';
import { Customer } from '../../Model/Customer';
import { Order, Orders } from '../../Model/Order';
import { ChangeDetectorRef } from '@angular/core';
import { CartService } from '../../Service/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
constructor(private cartService : CartService,private router : Router)
{

}

ngOnInit()
{

this.orderlist();
}
bookList: Book[] = [];

orders : Orders[] =[];
cartString = localStorage.getItem('cId') || '0';
cartId = parseInt(this.cartString,10);
orderlist()
{
  this.cartService.orderlist(this.cartId).subscribe(
     (res :any) =>{
      console.log(res);
      this.orders = res;

    
    },(error)=>{
      console.log(error);
    }
  );
}


disableCancelButton : boolean = false;
cancelOrder(orderId?: number)
{
  console.log(orderId);
  this.cartService.cancelOrder(orderId).subscribe((res)=>{
    console.log(res);
    this.disableCancelButton = true;
 console.log(this.disableCancelButton);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['order']); 
   });
  })
}

}







