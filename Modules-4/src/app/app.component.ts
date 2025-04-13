import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {
  private investmentService = inject(InvestmentService);
  results = computed(() => this.investmentService.Results());
}
