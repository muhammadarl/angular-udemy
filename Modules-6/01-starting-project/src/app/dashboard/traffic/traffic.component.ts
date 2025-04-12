import { Component, inject } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  dummyTrafficData = inject(DashboardService).resultsData;
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}
