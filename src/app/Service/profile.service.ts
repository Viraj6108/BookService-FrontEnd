import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Model/Customer';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }

  showProfile(id: number)
  {
    return this.http.get('http://localhost:8081/customerById/' + id, { responseType: "json" });
  }

  apiUrl = 'http://localhost:8081/update'
  updateCustomer(customerId: number, customerData: Customer): Observable<Customer> {
    const url = `${this.apiUrl}/${customerId}`;
    return this.http.put<Customer>(url, customerData);
  }

  changePassword(email: string, oldPassword: string, newPassword: string): Observable<Customer> {
    const body = {
      email: email,
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    return this.http.post<Customer>(`${this.apiUrl}/changePassword`, body);
  }
}
