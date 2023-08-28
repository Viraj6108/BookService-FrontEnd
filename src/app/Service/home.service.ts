import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http :  HttpClient){}
  baseUrl : string = "http://localhost:8081/"

  bookData()
  {
    return this.http.get(this.baseUrl+'getAllBooks')
  }

  searchBook(bookName : string)
  {
    return this.http.get(this.baseUrl+'getBook'+"/"+bookName);
  }
}
