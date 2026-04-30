import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-activity-table',
  imports: [MatDividerModule, MatListModule],
  templateUrl: './activity-table.html',
  styleUrl: './activity-table.css',
})
export class ActivityTable {}
