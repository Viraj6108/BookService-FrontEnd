import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../Model/Book';
import { LoginDto } from '../Model/registerInterface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:  HttpClient) { }

  isAdminLoggedIn = false;
adminlogin(loginDto : LoginDto)
{
  this.isAdminLoggedIn= true;
  return this.http.post('http://localhost:8081/logIn/',loginDto,{responseType : "text"as "json"})
}

addBook(book :Book,categoryName : string)
{
  const url = `http://localhost:8081/addbook/${categoryName}`;
  return this.http.post(url,book);
}

getBooks() : Observable<any>
{
  return this.http.get<any[]>('http://localhost:8081/getAllorders',{responseType:"json"});
}
}
