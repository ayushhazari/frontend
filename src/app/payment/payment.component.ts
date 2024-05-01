import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Payment } from '../../types';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  form: Payment ={
    paymentId: 0,
    cardNumber: '',
    cardExpiry: new Date(),
    cardOwner: ''
  }

  cardOwner : string = ''; 

  payments: Payment[] = [];

  constructor(private authService: AuthService,private apiService:ApiService, private router : Router){}

  paymentDetails(cardNumber: string, cardExpiry: Date,cardOwner: string ){
    this.apiService.setPayments(cardNumber, cardExpiry, cardOwner).subscribe(
      response => {
        console.log("PaymentDetails meth");
        console.log("Payment details saved successfully!");
        this.loadPayments();
        this.router.navigate(['/payment']);
      },
      error => {
        console.error("Error saving payment details:", error);
      }
    );
    

  }

  ngOnInit(): void {
    this.loadPayments();
  }

  loadPayments() {
    
      this.apiService.getPayments().subscribe(
        payments => {          
          this.payments = payments;
          console.log(this.payments);
        });
}

deletePayment(payment: Payment) {
  if (confirm('Are you sure you want to delete this payment?')) {
    this.apiService.deletePayment(payment.paymentId).subscribe(
      () => {
        this.payments = this.payments.filter(p => p !== payment);
        console.log('Payment deleted successfully!');
      },
      error => {
        console.error('Error deleting payment:', error);
      }
    );
  }
}


}


