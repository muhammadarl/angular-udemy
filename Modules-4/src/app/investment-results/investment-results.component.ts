import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { InvestmentResults } from '../investment-input.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  investmentResults= input<InvestmentResults[] | undefined>();


}
