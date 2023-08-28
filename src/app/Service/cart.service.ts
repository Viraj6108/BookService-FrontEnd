import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }

  private apiUrl ='http://localhost:8081'
  addBookToCart(bookName: string, customerId: number) {
    // Send a POST request to your backend API to add the book to the cart
    return this.http.post(`${this.apiUrl}/addBook/`+bookName+"/"+customerId, { responseType: "text"as "json"});
  }

  getcartBooks(customerId: number)
  {
    return this.http.get('http://localhost:8081/getCart/'+customerId,{ responseType: "json"})
  }
   
 

  checkout( mode : string, cartId : number) : Observable<string>
  {
  
    const url = `http://localhost:8081/checkout/${mode}/${cartId}`;
    
    // Use http.put() for a PUT request
    return this.http.put<string>(url, null, {responseType : "text"as "json"});
  }
  

  /// need to work on it

  orderList(orderId : number)
  {
    
   console.log(orderId);
    return this.http.get('http://localhost:8081/getOrder/' + orderId,{responseType : "json"})
  }

 

  orderlist(cartId : number)
  {
    return this.http.get('http://localhost:8081/getOrdersByCart/'+cartId, {responseType : "json"})
  }

  // removeFromCart(bookName ?: string ,customerId? : number)
  // {
  //   return this.http.post('http://localhost:8081/reomveBook/'+bookName + "/"+customerId ,{});
  // }

  removeFromCart(bookId : number, customerId: number)
  {
    return this.http.put('http://localhost:8081/removeBook/'+bookId + "/"+customerId,{});
  }


  cancelOrder(orderId?: number)
  {
      return this.http.put('http://localhost:8081/cancel/'+orderId,{responseType: "json"})
  }
}
  