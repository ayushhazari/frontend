import { Component } from '@angular/core';
import { Policy } from '../../types';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.css'
})
export class PoliciesComponent {
  policies : Policy[]=[] ;

  constructor(private apiService:ApiService){}
  ngOnInit(): void {
    this.loadPolicies();
  }


  loadPolicies(){
    this.apiService.getPolicies().subscribe((data: Policy[]) => {
      this.policies = data;
      console.log(this.policies);

    });
  }
}
