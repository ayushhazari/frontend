import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, Payment, Policy } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  private baseUrl = 'https://localhost:7051';

  setPayments(cardNumber: string, cardExpiry: Date, cardOwner: String): Observable<Payment>{
    return this.http.post<Payment>(`${this.baseUrl}/Payment`, {cardNumber, cardExpiry, cardOwner});
  }

  getPolicies(): Observable<Policy[]>{
    return this.http.get<Policy[]>(`${this.baseUrl}/Policy`);
  }

  getPolicyById(id:number):Observable<Policy>{
    return this.http.get<Policy>(`${this.baseUrl}/Policy/${id}`);
  }
  getEmployees(): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/employee`);
  }

  getPayments(): Observable<any>{
    return this.http.get(`${this.baseUrl}/payment`);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/Employees/${id}`);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Employees/login`, { email, password });

  }

  deletePayment(paymentId : number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/Payment/${paymentId}`);
  }

}