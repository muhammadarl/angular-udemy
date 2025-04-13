import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentInput } from './investment-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  results = signal<{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;

  }[] | undefined>(undefined);
  calculateInvestmentResults(investParam: InvestmentInput) {
    
    const annualData = [];
    let investmentValue = investParam.initialInvestment;

    for (let i = 0; i < investParam.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (investParam.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investParam.annualInvestment;
      const totalInterest =
        investmentValue - investParam.annualInvestment * year - investParam.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investParam.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: investParam.initialInvestment + investParam.annualInvestment * year,
      });
    }
    this.results.set(annualData);
  }

}
