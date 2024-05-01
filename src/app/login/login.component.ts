import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { Login } from '../../types';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: Login = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private apiService: ApiService, private router: Router) { }

  login(email : string, password :  string ){
    this.authService.login(this.form.email, this.form.password);
    console.log("in login");
  }
}