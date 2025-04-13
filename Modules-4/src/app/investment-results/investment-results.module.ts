import { CurrencyPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { InvestmentResultsComponent } from "./investment-results.component";

@NgModule({
    declarations: [InvestmentResultsComponent],
    imports: [CurrencyPipe],
    exports: [InvestmentResultsComponent],
})
export class InvestmentResultsModule { }