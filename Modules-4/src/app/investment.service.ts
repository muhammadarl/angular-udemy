import { Injectable, signal } from "@angular/core";
import { InvestmentInput, InvestmentResults } from "./investment-input.model";

@Injectable({
    providedIn: 'root'
})
export class InvestmentService {
    private results = signal<InvestmentResults[] | undefined>(undefined);

    Results() {
        return this.results;
    }
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