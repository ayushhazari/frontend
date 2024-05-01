import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { ApiService } from './service/api.service';
import { Login } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'frontend';
  isLoggedIn: boolean = false;
  employeeName: string = '';

  constructor(private authService : AuthService, private apiService : ApiService, private router: Router){ }
}
