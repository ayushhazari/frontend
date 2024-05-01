import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from './service/api.service';
import { Router } from '@angular/router';
import { Employee } from '../types';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoading : boolean  = false; 

  isLoggedIn: boolean = false;
  employeeName: string = '';


  private baseUrl = 'https://localhost:7051';

  loggedInEmployeeId : number | null = null;

  constructor(private http:HttpClient, private apiService: ApiService, private router: Router) { }

  

  logout(){
    this.loggedInEmployeeId = null;
  }

  // isLoggedIn() : boolean{
  //   return this.loggedInEmployeeId != null;
  // }

  getLoggedInEmployeeId() : number | null{
    return this.loggedInEmployeeId;
  }

  
  login(email: string, password: string) {
    this.apiService.login(email, password).subscribe(response => {
      if (response) {
        console.log(response);
        this.loggedInEmployeeId = response.employeeId;
        this.isLoggedIn = true;
        this.employeeName=response.employeeId;
        sessionStorage.setItem('userId',String(response.employeeId));
        this.router.navigate(['employees']);
        
      }
    });
  }

  
}
