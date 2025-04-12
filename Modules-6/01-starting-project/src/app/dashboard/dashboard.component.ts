import { Component } from '@angular/core';
import { ServerStatusComponent } from './server-status/server-status.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TrafficComponent } from './traffic/traffic.component';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ServerStatusComponent, TicketsComponent, TrafficComponent, DashboardItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
}
