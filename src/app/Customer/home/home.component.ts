import { Component } from '@angular/core';
import { searchBar } from '../../Model/searchBar';
import { CartService } from '../../Service/cart.service';
import { HomeService } from '../../Service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private homeService:HomeService,
    private cartService :CartService
  ){}
  public books:any[] = []
    ngOnInit(){
       this.getBooks();
    }
  getBooks(){
    this.homeService.bookData().subscribe((result: any) =>{
      this.books=result as any;
      console.log(this.books);
    })
  }


  addToCart(bookName: string) {
    const customerIdString = localStorage.getItem('cId') || '0';

    // Parse the customerIdString as an integer
    const customerId = parseInt(customerIdString);
    console.log(bookName);
    this.cartService.addBookToCart(bookName,customerId).subscribe(
      
      (response) => {
        alert("Book Added to cart");
        console.log('Book added to cart:', response);
      },
      (error) => {
        
        alert("Login to add to cart");
      }
    );
}
searchClicked : boolean = false;
searchQuery: string='';

 search : searchBar = new searchBar();
searchBook()
{
  console.log(this.searchQuery);

  this.homeService.searchBook(this.searchQuery).subscribe((res:any)=>{
    console.log(res);
   this. search  = res;
    this.searchClicked = true;
    console.log(this.searchClicked);
  })
}
}
