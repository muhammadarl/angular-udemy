import { Component, inject } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus = inject(DashboardService).currentStatus;
}
