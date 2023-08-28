import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../Model/Book';
import { Cart } from '../../Model/Cart';



import { CartService } from '../../Service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService,private router : Router) {}

  ngOnInit()
  {
   this.loadCartBooks();
   this.removeButton();
   
  } 

 cart: Cart = new Cart();
 book : Book[] =[];
  customerIdString = localStorage.getItem('cId') || '0';
// Parse the customerIdString as an integer
 customerId = parseInt(this.customerIdString, 10);

 loadCartBooks()
 {
    this.cartService.getcartBooks(this.customerId).subscribe(
      (response) => {
       this.cart = response ;
       
        console.log(response); // For debugging
      },
      (error) => {
        alert("Error Fetching Cart");
      }
    );
    }

// Function for checkout 
    selectedPaymentMode : string = 'COD';
    checkout()
    {
    const  customerIdString = localStorage.getItem('cId') || '0';

      // Parse the customerIdString as an integer
       const cartId = parseInt(this.customerIdString, 10);
    //  console.log(this.selectedPaymentMode);
    //  console.log(cartId);
      this.cartService.checkout(this.selectedPaymentMode,cartId).subscribe (
        (response) => {
          console.log(response);
          localStorage.setItem('oid', response);
       
          this.router.navigate(['order']);
          // this.order.ordersList();
        },
        (error) => {
          alert("No book in cart to checkout");
            console.log(error);
        }
      )
    }

    // Function to remove book form cart 
    removeButton(bookId ?: number)
    {
      if (bookId !== undefined) {
        // Use bookId as a non-nullable number
       console.log(bookId);
        this.cartService.removeFromCart(bookId, this.customerId).subscribe((res)=>{
          console.log(res);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['cart']); 
          });
        }
        );
      }
    }

   

     
   
      }
    
       
    
   

