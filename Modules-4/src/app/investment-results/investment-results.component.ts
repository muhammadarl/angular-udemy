import { Component, input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  investmentResults= input.required<{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[]>();


}
