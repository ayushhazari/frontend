import { Component } from '@angular/core';
import { Employee, Policy } from '../../types';
import { ApiService } from '../service/api.service';
import { AuthService } from '../auth.service';
import { setSourceMapsEnabled } from 'process';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  employeeName: string = '';
  companyName: string = '';
  policyName: string = '';
  startDate: Date = new Date(); 
  endDate: Date = new Date();

  isLoggedIn: boolean = false;


  employees!: Employee;
  
  policies!: Policy;

  constructor(private apiService: ApiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadEmployeeName();
    this.loadPolicies();
  }



  loadEmployeeName() {
    const loggedInEmployeeId = sessionStorage.getItem('userId');
    if (loggedInEmployeeId !== null) {

      this.apiService.getEmployeeById(Number(loggedInEmployeeId)).subscribe(
        employee => {          

          this.employeeName = employee.name;
          this.companyName = employee.companyName;

          console.log(this.employeeName);

          this.isLoggedIn = true;
        });


    } else {
      this.isLoggedIn = false;
      this.employeeName = '';
    }
  }

  loadPolicies(){
    const empId = sessionStorage.getItem('userId');

    if(empId !== null){
      this.apiService.getPolicyById(Number(empId)).subscribe(
        policy=>{
          this.policyName = policy.policyName;
          this.startDate = policy.startDate;
          this.endDate = policy.endDate;

        }
      );
    }

  }

 


  // policies!: Policy;
  // loadPolicies() {
  //   const empId = sessionStorage.getItem('userId');

  //   if (empId) {
  //     this.apiService.getPolicyById(empId).subscribe(
  //       (response: Policy) => {
  //         this.policies = response;


  //         console.log(this.policies);
  //       }
  //     )
  //   }
  // }

}
