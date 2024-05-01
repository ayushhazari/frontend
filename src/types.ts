export interface Policy {
    policyId: number;
    policyName: string;
    startDate: Date;
    endDate: Date;
    empId: number;
    insurenceCompany: string;
  }


  export interface Employee{
    empId : number;
    name : string;
    email : string;
    companyName : string;
    contact : string;
    password : string;
  }
  
  export interface Login{
    email : string;
    password : string;
  }

  export interface Payment{
    paymentId : number;
    cardNumber : string;
    cardExpiry : Date;
    cardOwner : string;
  }