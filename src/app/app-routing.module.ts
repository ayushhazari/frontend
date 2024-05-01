import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliciesComponent } from './policies/policies.component';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'policy',component:PoliciesComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'app', component:AppComponent},
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'payment',component:PaymentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
