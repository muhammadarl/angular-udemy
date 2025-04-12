import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DashboardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
