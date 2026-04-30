import { Component, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ActivityList, Table_Model } from '../../models/table.model';

@Component({
  selector: 'app-activity-table',
  imports: [MatDividerModule, MatListModule],
  templateUrl: './activity-table.html',
  styleUrl: './activity-table.css',
})
export class ActivityTable {
  activity = input.required<ActivityList>();
}
