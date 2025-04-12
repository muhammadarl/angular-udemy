import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 5;
  duration: number = 10;

  calculateInvestment() {
    const totalInvestment = this.initialInvestment + (this.annualInvestment * this.duration);
    const futureValue = totalInvestment * Math.pow((1 + this.expectedReturn / 100), this.duration);
    console.log(`Total Investment: ${futureValue}`);
  }
}
